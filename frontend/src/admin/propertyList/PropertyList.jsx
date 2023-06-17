import React, { useEffect } from "react";
import { Container, Grid, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/admin/adminProperty/action";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  const dispatch = useDispatch();
  const { isLoading, property } = useSelector((store) => {
    return store.adminPropertyReducer;
  });

  useEffect(() => {
    dispatch(getData);
  }, []);

  console.log(property);

  if (isLoading) {
    return (
      <Heading size={"2xl"} mt={"10%"} textAlign={"center"}>
        Loading....
      </Heading>
    );
  }
  return (
    <>
      <Container maxW="container.1xl">
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={6}
          mb="20px"
          mt={"60px"}
        >
          {property.length > 0 &&
            property.map((el) => {
              return <PropertyCard key={el._id} {...el} />;
            })}
        </Grid>
      </Container>
    </>
  );
};

export default PropertyList;
