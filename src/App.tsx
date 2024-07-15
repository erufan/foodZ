import {
  Box,
  Checkbox,
  CheckboxGroup,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Header from "./components/Header";
import FoodCard from "./components/main/FoodCard";
import db from "./fakeDb.json";
import Cuisines from "./data/Cuisines";

interface Data {
  number: number;
  offset: number;
  results: Foods[];
}
interface Foods {
  id: number;
  image: string;
  title: string;
}

const App = () => {
  const Recipes = useQuery<Data>({
    queryKey: ["foods"],
    staleTime: Infinity,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: false,

    queryFn: () =>
      axios
        .get("https://api.spoonacular.com/recipes/complexSearch", {
          headers: {
            "x-api-key": "320257234ef641e490b92f02e0617585",
          },
        })
        .then((res) => res.data),
  });
  const data = db.json.results;
  return (
    <>
      <Grid templateAreas={`"header header" "asid main"`}>
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="asid">
          <CheckboxGroup colorScheme="green">
            <Stack>
              {Cuisines.map((C) => (
                <Checkbox value={C.name}>{C.name}</Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </GridItem>
        <GridItem bg="coral" area="main">
          <SimpleGrid minChildWidth="250px" spacing={5}>
            {data.map((d) => (
              <FoodCard image={d.image} title={d.title} />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
