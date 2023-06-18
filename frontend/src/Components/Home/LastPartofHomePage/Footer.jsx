import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
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
            <Link href={"#"}>Kolkata Real Estate</Link>
            <Link href={"#"}>Mumbai Real Estate</Link>
            <Link href={"#"}>Delhi Real Estate</Link>
            <Link href={"#"}>Lucknow Real Estate</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Popular Searches</ListHeader>
            <Link href={"#"}>Condos for Sale Near Me</Link>
            <Link href={"#"}>Apartments for Rent Near Me</Link>
            <Link href={"#"}>Houses for Sale Near Me</Link>
            <Link href={"#"}>Houses for Rent Near Me</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Explore Trulia</ListHeader>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box>
                <FaFacebook />
              </Box>
              <Box>
                <Link>Facebook</Link>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box>
                <FaTwitter />
              </Box>
              <Box>
                <Link>Twitter</Link>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box>
                <FaInstagram />
              </Box>
              <Box>
                <Link>Instagram</Link>
              </Box>
            </Stack>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box>
                <FaYoutube />
              </Box>
              <Box>
                <Link>Youtube</Link>
              </Box>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>For Professionals</ListHeader>
            <Link href={"#"}>Popular Counties</Link>
            <Link href={"#"}>Rental Communities</Link>
            <Link href={"#"}>Real Estate Leads</Link>
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
