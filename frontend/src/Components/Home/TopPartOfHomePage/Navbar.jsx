import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "./images/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      align="center"
      padding="20px"
      border="none"
      // flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        marginRight="20px"
        marginLeft="20px"
        // display={{ base: "block", md: "none" }}
      >
        <Link to="/"><Image src={logo} alt="Logo" boxSize="40px" /></Link>
      </Box>
      <Flex
        flex={{ base: 1, md: "auto" }}
        justify={{ base: "center", md: "flex-start" }}
      >
        <Link to="/buyproduct">
        <Box
          position="relative"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          marginRight="10px"
          padding="10px"
          _hover={{
            bgColor: "#007882",
            color: "white",
            fontWeight: "bold",
          }}
          borderRadius="10px"
          display={{ base: "none", md: "block" }}
        >
          Buy
        </Box></Link>
        <Box
          marginRight="10px"
          padding="10px"
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Rent
        </Box>
        <Box
          marginRight="10px"
          padding="10px"
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Mortgage
        </Box>
      </Flex>
      <Flex ml="auto" alignItems="center">
        <Box
          marginRight="10px"
          padding="10px"
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Saved Homes
        </Box>
        <Box
          marginRight="10px"
          padding="10px"
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Saved Searches
        </Box>
        <Link to="/signin">
        <Box
          marginRight="10px"
          padding="10px"
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Login
        </Box></Link>
        <Link to="/signup">
        <Box
          marginRight="10px"
          padding="10px"
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Sign Up
        </Box>
        </Link>
        <Menu isLazy display={{ base: "block", md: "none" }}>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon boxSize={"20px"} borderRadius="5px" />}
            variant="outline"
            onClick={handleMenuToggle}
          />
          <MenuList
            bgColor="#2D2F3B"
            color="#2D2F3B"
            borderRadius="10px"
            fontWeight="bold"
            padding={0}
            zIndex={10}
            fontSize="md"
            border="none"
            minWidth="200px"
            css={{
              ".chakra-menu__item:not(:last-child)": {
                borderBottom: "none",
              },
              ".chakra-menu__item:hover": {
                bgColor: "#007882",
                color: "white",
              },
            }}
          >
            <Link to="/buyproduct">
            <MenuItem
              onClick={handleMenuToggle}
              px="6px"
              py="4px"
              borderRadius="10px"
              fontWeight="bold"
              color="rgb(59, 65, 68)"
              _hover={{ bgColor: "#007882", color: "white" }}
              borderBottom="1px solid white"
              transition="background-color 0.3s ease"
            >
              Buy
            </MenuItem>
            </Link>
            <MenuItem
              onClick={handleMenuToggle}
              px="6px"
              py="4px"
              borderRadius="10px"
              fontWeight="bold"
              color="rgb(59, 65, 68)"
              _hover={{ bgColor: "#007882", color: "white" }}
              borderBottom="1px solid white"
              transition="background-color 0.3s ease"
            >
              Rent
            </MenuItem>
            <MenuItem
              onClick={handleMenuToggle}
              px="6px"
              py="4px"
              borderRadius="10px"
              fontWeight="bold"
              color="rgb(59, 65, 68)"
              _hover={{ bgColor: "#007882", color: "white" }}
              borderBottom="1px solid white"
              transition="background-color 0.3s ease"
            >
              Mortgage
            </MenuItem>
            <Link to="/signup">
            <MenuItem
              onClick={handleMenuToggle}
              px="6px"
              py="4px"
              borderRadius="10px"
              fontWeight="bold"
              color="rgb(59, 65, 68)"
              _hover={{ bgColor: "#007882", color: "white" }}
              borderBottom="1px solid white"
              transition="background-color 0.3s ease"
            >
              Sign Up
            </MenuItem>
            </Link>
            <Link to="/signin">
            <MenuItem
              onClick={handleMenuToggle}
              px="6px"
              py="4px"
              borderRadius="10px"
              fontWeight="bold"
              color="rgb(59, 65, 68)"
              _hover={{ bgColor: "#007882", color: "white" }}
              borderBottom="1px solid white"
              transition="background-color 0.3s ease"
            >
              Login
            </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;