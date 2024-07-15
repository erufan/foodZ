import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Header from "./components/Header";
import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  const Recipes = useQuery({
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
  console.log(Recipes.data);

  return (
    <>
      <Grid templateAreas={`"header header" "asid main"`}>
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem bg="green" area="asid">
          asid
        </GridItem>
        <GridItem bg="coral" area="main"></GridItem>
      </Grid>
    </>
  );
};

export default App;
