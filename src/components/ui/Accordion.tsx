import {
  Accordion as ChaAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface Props {
  buttonText: string;
  height: string;
  children: ReactNode;
}

const Accordion = ({ buttonText, height, children }: Props) => {
  return (
    <ChaAccordion allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Text as="span">{buttonText}</Text>
          <RiArrowDownSLine />
        </AccordionButton>
        <AccordionPanel overflowY="scroll" height={height}>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </ChaAccordion>
  );
};

export default Accordion;
