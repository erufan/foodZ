import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import db from "../fakeDb.json";
import CuisinesAccordion from "../components/main/CuisinesAccordion";
import FoodCard from "../components/main/FoodCard";
import { useSearchParams } from "react-router-dom";

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

const RecipesPage = () => {
  const [params] = useSearchParams();
  console.log(params.get("cuisine"));

  const Recipes = useQuery<Data>({
    queryKey: ["foods", params.get("cuisine")],

    queryFn: () =>
      axios
        .get("https://api.spoonacular.com/recipes/complexSearch", {
          headers: {
            "x-api-key": "320257234ef641e490b92f02e0617585",
          },
          params: {
            cuisine: params.get("cuisine"),
          },
        })
        .then((res) => res.data),
  });
  const data = Recipes.data?.results;
  return (
    <>
      <Grid templateAreas={`"asid main"`}>
        <GridItem area="asid">
          <CuisinesAccordion />
        </GridItem>
        <GridItem bg="coral" area="main">
          <SimpleGrid minChildWidth="250px" spacing={5}>
            {data?.map((d) => (
              <FoodCard image={d.image} title={d.title} key={d.id} />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default RecipesPage;
