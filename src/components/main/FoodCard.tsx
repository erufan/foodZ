import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const FoodCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Image src={image} borderRadius="50%" width="250px" height="250px" />
        </CardHeader>
        <CardBody>
          <Heading>{title}</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing ...</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default FoodCard;
