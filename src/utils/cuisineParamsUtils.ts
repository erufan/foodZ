import { useSearchParams } from "react-router-dom";

const cuisineParamsUtils = () => {
  const [params, setParams] = useSearchParams();

  const createCuisines = function (name: string) {
    setParams({ ...params, cuisine: name });
  };

  const thereISNoCuisines = function () {
    return !params.get("cuisine");
  };
  const cuisinesHasTheregion = function (name: string) {
    return params.get("cuisine")?.search(name) !== -1;
  };
  const addTheRegion = function (name: string) {
    return setParams({
      ...params,
      cuisine: params.get("cuisine") + "," + name,
    });
  };
  const isFirstTheRegion = function (name: string) {
    return params.get("cuisine")?.indexOf(name) == 0;
  };
  const isAloneRegion = function () {
    return params.get("cuisine")?.search(",") == -1;
  };

  const removeCuisines = function (
    name: string,
    type: "first" | "notFirst" | "removeCuisines"
  ) {
    if (type === "first")
      return setParams({
        ...params,
        cuisine: params.get("cuisine")?.replace(name + ",", ""),
      });
    if (type === "notFirst")
      return setParams({
        ...params,
        cuisine: params.get("cuisine")?.replace("," + name, ""),
      });
    if (type === "removeCuisines")
      return setParams({
        ...params,
      });
  };
  return {
    thereISNoCuisines,
    cuisinesHasTheregion,
    addTheRegion,
    isFirstTheRegion,
    isAloneRegion,
    removeCuisines,
    createCuisines,
  };
};

export default cuisineParamsUtils;
