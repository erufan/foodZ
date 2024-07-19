import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { transform } from "framer-motion";

const FoodCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <>
      <Card
        display="flex"
        justifyItems="end"
        transition="all 0.07s"
        cursor="pointer"
        _hover={{
          transform: "scale(1.01)",
          boxShadow:
            "0 1px 3px 0 rgba(144, 208, 68, 1),2px 1px 2px 0 rgba(221, 160, 221, 0.50)",
        }}
      >
        <CardHeader>
          <Image
            src={image}
            borderRadius="50%"
            width="150px"
            height="150px"
            margin="auto"
            alt={title}
          />
          <Heading fontSize="large" textAlign="center" marginTop={4}>
            {title}
          </Heading>
        </CardHeader>
        <CardBody>
          <VStack height="100%" justify="end">
            <Text align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing ...
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default FoodCard;
