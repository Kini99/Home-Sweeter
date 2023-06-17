import React, { useState } from "react";
import { Box, Flex, Image, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex align="center" padding={4} border="none" flexDirection={{ base: "column", md: "row" }}>
      <Box marginRight={10} marginLeft={10} display={{ base: "block", md: "none" }}>
        <Image src="logo.png" alt="Logo" />
      </Box>
      <Flex flex={{ base: 1, md: "auto" }} justify={{ base: "center", md: "flex-start" }}>
        <Box
          position="relative"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          marginRight={4}
          padding={10}
          _hover={{ bgColor: "#007882", color: "white", fontWeight: "bold" }}
          borderRadius="10px"
          display={{ base: "none", md: "block" }}
        >
          Buy
        </Box>
        <Box
          marginRight={4}
          padding={10}
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Rent
        </Box>
        <Box
          marginRight={4}
          padding={10}
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
          marginRight={4}
          padding={10}
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Saved Homes
        </Box>
        <Box
          marginRight={4}
          padding={10}
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Saved Searches
        </Box>
        <Box
          marginRight={4}
          padding={10}
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Login
        </Box>
        <Box
          marginRight={4}
          padding={10}
          _hover={{ bgColor: "#007882", color: "white" }}
          borderRadius="10px"
          fontWeight="bold"
          color="rgb(59, 65, 68)"
          display={{ base: "none", md: "block" }}
        >
          Sign Up
        </Box>
        <Menu isLazy display={{ base: "block", md: "none" }}>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon boxSize={20} borderRadius="5px" />}
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
            fontSize="xl"
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
            <MenuItem
              onClick={handleMenuToggle}
              px={6}
              py={4}
              borderRadius="10px"
              fontWeight="bold"
              color="rgb(59, 65, 68)"
              _hover={{ bgColor: "#007882", color: "white" }}
              borderBottom="1px solid white"
              transition="background-color 0.3s ease"
            >
              Buy
            </MenuItem>
            <MenuItem
              onClick={handleMenuToggle}
              px={6}
              py={4}
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
              px={6}
              py={4}
              borderRadius="10px"
              fontWeight="bold"
              color="rgb(59, 65, 68)"
              _hover={{ bgColor: "#007882", color: "white" }}
              borderBottom="1px solid white"
              transition="background-color 0.3s ease"
            >
              Mortgage
            </MenuItem>
            <MenuItem
              onClick={handleMenuToggle}
              px={6}
              py={4}
              borderRadius="10px"
              fontWeight="bold"
              color="rgb(59, 65, 68)"
              _hover={{ bgColor: "#007882", color: "white" }}
              borderBottom="1px solid white"
              transition="background-color 0.3s ease"
            >
              Sign Up
            </MenuItem>
            <MenuItem
              onClick={handleMenuToggle}
              px={6}
              py={4}
              borderRadius="10px"
              fontWeight="bold"
              color="rgb(59, 65, 68)"
              _hover={{ bgColor: "#007882", color: "white" }}
              borderBottom="1px solid white"
              transition="background-color 0.3s ease"
            >
              Login
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
