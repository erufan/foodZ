import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Header from "./components/Header";

const App = () => {
  const Recipes = useQuery({
    queryKey: ["foods"],
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
      <Header />
    </>
  );
};

export default App;
