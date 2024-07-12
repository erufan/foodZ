import {
  HStack,
  Link,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { GiSushis } from "react-icons/gi";

const Header = () => {
  return (
    <HStack justify="space-around">
      <Link>
        <GiSushis size={45} color="red" />
      </Link>
      <InputGroup width="auto">
        <InputLeftAddon>
          <CiSearch color="gray.300" />
        </InputLeftAddon>
        <Input type="text" placeholder="search..." />
      </InputGroup>
      <Link>Home</Link>
    </HStack>
  );
};

export default Header;
