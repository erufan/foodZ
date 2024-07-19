import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import CuisinesAccordion from "../components/main/CuisinesAccordion";
import FoodCard from "../components/main/FoodCard";
import useRecipes from "../hooks/useRecipes";

const RecipesPage = () => {
  const { data } = useRecipes();

  return (
    <>
      <Grid templateAreas={`"asid main main main main main main"`} paddingY={5}>
        <GridItem area="asid" paddingX={3}>
          <CuisinesAccordion />
        </GridItem>
        <GridItem area="main">
          <SimpleGrid minChildWidth="250px" spacing={5}>
            {data?.results.map((d) => (
              <FoodCard image={d.image} title={d.title} key={d.id} />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default RecipesPage;
