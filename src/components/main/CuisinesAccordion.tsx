import Accordion from "../ui/Accordion";
import { CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";
import Cuisines from "../../data/Cuisines";
import { useSearchParams } from "react-router-dom";

const CuisinesAccordion = () => {
  const [params, setParams] = useSearchParams();

  const cuisinesHandler = (c: { name: string }) => {
    const thereISNoCuisines = function () {
      return !params.get("Cuisines");
    };
    const cuisinesHasTheregion = function () {
      return params.get("Cuisines")?.search(c.name) !== -1;
    };
    const addTheRegion = function () {
      return setParams({
        ...params,
        Cuisines: params.get("Cuisines") + "," + c.name,
      });
    };
    const isFirstTheRegion = function () {
      return params.get("Cuisines")?.indexOf(c.name) == 0;
    };
    const isAloneRegion = function () {
      return params.get("Cuisines")?.search(",") == -1;
    };

    const remove = function (type: "first" | "notFirst" | "removeCuisines") {
      if (type === "first")
        return setParams({
          ...params,
          Cuisines: params.get("Cuisines")?.replace(c.name + ",", ""),
        });
      if (type === "notFirst")
        return setParams({
          ...params,
          Cuisines: params.get("Cuisines")?.replace("," + c.name, ""),
        });
      if (type === "removeCuisines")
        return setParams({
          ...params,
        });
    };

    if (thereISNoCuisines()) {
      return setParams({ ...params, Cuisines: c.name });
    } else {
      if (cuisinesHasTheregion()) {
        isFirstTheRegion()
          ? isAloneRegion()
            ? remove("removeCuisines")
            : remove("first")
          : remove("notFirst");
      } else {
        addTheRegion();
      }
    }
  };

  return (
    <Accordion buttonText="Cuisines" height="45vh">
      <CheckboxGroup colorScheme="green">
        <Stack>
          {Cuisines.map((c) => (
            <Checkbox
              inlineSize={1}
              value={c.name}
              key={c.name}
              onChange={() => cuisinesHandler(c)}
            >
              {c.name}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Accordion>
  );
};

export default CuisinesAccordion;
