import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import { useSearchParams } from "react-router-dom";

interface Foods {
  id: number;
  image: string;
  title: string;
}

const apiClient = new ApiClient<Foods>("/recipes/complexSearch");

const useRecipes = () => {
  const [params] = useSearchParams();

  return useQuery({
    queryKey: ["foods", { cuisine: params.get("cuisine") }],
    queryFn: () =>
      apiClient.getAll({
        params: {
          cuisine: params.get("cuisine"),
        },
      }),
  });
};

export default useRecipes;
