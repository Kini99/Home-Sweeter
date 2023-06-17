import React from "react";
import TopNavbar from "../Top Navbar/TopNavbar";
import { Box, Container } from "@chakra-ui/react";
import PropertyList from "./PropertyList";
const Property = () => {
  return (
    <>
      <Box bgColor={"#eefcec"}>
        <TopNavbar />
        <Container
          maxW={{
            base: "100%",
            sm: "90%",
            lg: "80%",
          }}
        >
          <Box mb={5}>
            <PropertyList />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Property;
