import Accordion from "../ui/Accordion";
import { CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";
import Cuisines from "../../data/Cuisines";

const CuisinesAccordion = () => {
  return (
    <Accordion buttonText="Cuisines" height="45vh">
      <CheckboxGroup colorScheme="green">
        <Stack>
          {Cuisines.map((C) => (
            <Checkbox inlineSize={1} value={C.name}>
              {C.name}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Accordion>
  );
};

export default CuisinesAccordion;
