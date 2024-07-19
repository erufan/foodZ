import { HStack, InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { GiSushis } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack justify="space-around" padding={5}>
      <Link to="/">
        <GiSushis size={45} color="red" />
      </Link>
      <InputGroup width="auto">
        <InputLeftAddon>
          <CiSearch color="gray.300" />
        </InputLeftAddon>
        <Input type="text" placeholder="search..." />
      </InputGroup>
      <Link to="/recipes">Recipes</Link> <Link to="/">Home</Link>
    </HStack>
  );
};

export default Header;
