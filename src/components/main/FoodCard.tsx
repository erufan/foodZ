import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const FoodCard = ({ image }: { image: string }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Image src={image} borderRadius="50%" width="250px" height="250px" />
        </CardHeader>
        <CardBody>
          <Heading>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            eos fugiat tenetur ducimus fugit ipsa eveniet dicta, inventore illum
            dolor? Repellat quisquam velit illum vitae nesciunt omnis maxime
            accusantium consequuntur!
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default FoodCard;
