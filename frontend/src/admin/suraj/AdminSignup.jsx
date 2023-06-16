import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  InputRightElement,
  Stack,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

export const AdminSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const postdata = () => {
    const payload = {
      name,
      email,
      phone,
      password,
    };
    axios.post("http://localhost:8080/admins/register", payload)
    .then((res) => 
    console.log(res.data)
    )
    .catch((err) => console.log(err));

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };


  return (
    <Flex
      // border={"1px solid "}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        //border={"1px solid red"}
        spacing={5}
        mx={"auto"}
        w={"1000px"}
        maxW={"lg"}
        py={8}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
           Admin Sign Up
          </Heading>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button variant={"ghost"} onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                onClick={postdata}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <NavLink style={{ color: "dodgerblue" }} to="/adminsignin">
                  Sign In
                </NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
