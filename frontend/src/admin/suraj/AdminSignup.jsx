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
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { firebaseCon } from "../config/firebase";
import { API } from "../config/API";

export const AdminSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const googleSignup = async () => {
    const auth = getAuth(firebaseCon);
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider)
      .then((res) => {
        const { displayName, email } = res._tokenResponse;
        const postData = {
          name: displayName,
          email: email,
        };
        API({
          url: "/admins/admingooglesignup",
          method: "POST",
          data: postData,
        })
          .then((res) => {
            //console.log(res);
            alert(res.data.msg)
          })
          .catch((err) => {
            console.log(err);
          });
      })
  };

  const postdata = () => {
    const payload = {
      name,
      email,
      phone,
      password,
    };
    API.post("/admins/register", payload)
      .then((res) => console.log(res.data))
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
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
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

            <Stack>
              <Button onClick={googleSignup}> Google </Button>
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
