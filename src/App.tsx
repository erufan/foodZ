import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Header from "./components/Header";
import db from "./fakeDb.json";
import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Image,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";

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
  const data: Data = db.json;
  return (
    <>
      <Grid templateAreas={`"header header" "asid main"`}>
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem bg="green" area="asid">
          asid
        </GridItem>
        <GridItem bg="coral" area="main">
          <Card>
            <CardHeader>
              <Image
                src={data.results[0].image}
                borderRadius="50%"
                width="250px"
                height="250px"
              />
            </CardHeader>
            <CardBody>
              <Heading>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt eos fugiat tenetur ducimus fugit ipsa eveniet dicta,
                inventore illum dolor? Repellat quisquam velit illum vitae
                nesciunt omnis maxime accusantium consequuntur!
              </Text>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
