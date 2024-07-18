import Accordion from "../ui/Accordion";
import { CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";
import Cuisines from "../../data/Cuisines";
import cuisineParamsUtils from "../../utils/cuisineParamsUtils";

const CuisinesAccordion = () => {
  const {
    createCuisines,
    thereISNoCuisines,
    cuisinesHasTheregion,
    isFirstTheRegion,
    isAloneRegion,
    removeCuisines,
    addTheRegion,
  } = cuisineParamsUtils();

  const cuisinesHandler = (name: string) => {
    if (thereISNoCuisines()) {
      return createCuisines(name);
    } else {
      if (cuisinesHasTheregion(name)) {
        isFirstTheRegion(name)
          ? isAloneRegion()
            ? removeCuisines(name, "removeCuisines")
            : removeCuisines(name, "first")
          : removeCuisines(name, "notFirst");
      } else {
        addTheRegion(name);
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
              onChange={() => cuisinesHandler(c.name)}
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
