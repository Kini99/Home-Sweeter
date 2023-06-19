import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} fontSize={"lg"} mb={2} color={"black"}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Real Estate Markets</ListHeader>
            <Text>Kolkata Real Estate</Text>
            <Text>Mumbai Real Estate</Text>
            <Text>Delhi Real Estate</Text>
            <Text>Lucknow Real Estate</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Popular Searches</ListHeader>
            <Text>Condos for Sale Near Me</Text>
            <Text>Apartments for Rent Near Me</Text>
            <Text>Houses for Sale Near Me</Text>
            <Text>Houses for Rent Near Me</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Explore Trulia</ListHeader>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box>
                <FaFacebook />
              </Box>
              <Box>
                <Text>Facebook</Text>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box>
                <FaTwitter />
              </Box>
              <Box>
                <Text>Twitter</Text>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box>
                <FaInstagram />
              </Box>
              <Box>
                <Text>Instagram</Text>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box>
                <FaYoutube />
              </Box>
              <Box>
                <Text>Youtube</Text>
              </Box>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>For Professionals</ListHeader>
            <Text>Popular Counties</Text>
            <Text>Rental Communities</Text>
            <Text>Real Estate Leads</Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2023 HomeSweeter. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
