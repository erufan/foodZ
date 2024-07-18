import { useSearchParams } from "react-router-dom";

const cuisineParamsUtils = () => {
  const [params, setParams] = useSearchParams();

  const createCuisines = function (name: string) {
    setParams({ ...params, Cuisines: name });
  };

  const thereISNoCuisines = function () {
    return !params.get("Cuisines");
  };
  const cuisinesHasTheregion = function (name: string) {
    return params.get("Cuisines")?.search(name) !== -1;
  };
  const addTheRegion = function (name: string) {
    return setParams({
      ...params,
      Cuisines: params.get("Cuisines") + "," + name,
    });
  };
  const isFirstTheRegion = function (name: string) {
    return params.get("Cuisines")?.indexOf(name) == 0;
  };
  const isAloneRegion = function () {
    return params.get("Cuisines")?.search(",") == -1;
  };

  const removeCuisines = function (
    name: string,
    type: "first" | "notFirst" | "removeCuisines"
  ) {
    if (type === "first")
      return setParams({
        ...params,
        Cuisines: params.get("Cuisines")?.replace(name + ",", ""),
      });
    if (type === "notFirst")
      return setParams({
        ...params,
        Cuisines: params.get("Cuisines")?.replace("," + name, ""),
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
