import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const FoodCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <>
      <Card display="flex" justifyItems="end">
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
