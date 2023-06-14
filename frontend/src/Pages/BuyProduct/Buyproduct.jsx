import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../redux/ProductReducer/action";
import { Box, Button, Flex, Grid, Stack,Skeleton } from "@chakra-ui/react";
import BuyProductCart from "./BuyproductCart"


const Product = () => {
  const [page, setPage] = useState(1);
  const [searchParam, setSearchParam] = useSearchParams();
  const dispatch = useDispatch();

  const {isloading, buyProduct }=useSelector((store)=>{
    return store.buyReducer
  })

  
  // let allParams = {
  //   params: {
  //     category: searchParam.getAll("category"),
  //     _limit: 8,
  //     _page: page,
  //   },
  
  useEffect(() => {
    dispatch(getProducts());
  }, []);


  if (isloading) {
    return (
      <Grid
        w={"90%"}
        m={"auto"}
        gridTemplateColumns={{
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
          md: "repeat(4,1fr)",
          sm: "repeat(2,1fr)",
          base: "repeat(2,1fr)",
        }}
        gap={"20px"}
      >
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
        <Stack>
          <Skeleton
            startColor="green.500"
            endColor="orange.500"
            height="200px"
          />
        </Stack>
      </Grid>
    );
  }
  return (
    <>
      <br />
      <Grid
        gridTemplateColumns={{
          xl: "repeat(4,1fr)",
          lg: "repeat(4,1fr)",
          md: "repeat(4,1fr)",
          sm: "repeat(2,1fr)",
          base: "repeat(2,1fr)",
        }}
        gap={5}
        w={{ xl: "85%", lg: "85%", md: "85%", sm: "95%", base: "95%" }}
        m={"auto"}
      >
        {buyProduct.map((el) => {
          return ( <BuyProductCart key={el.id} product={el} />);
        })}
      </Grid>
      <br />
      <Flex gap={"5px"} justifyContent={"center"}>
        <Button
          onClick={() => setPage((pre) => pre - 1)}
          isDisabled={page === 1}
          color={"#00d100"}
        >
          PRE
        </Button>
        <Button color={"#00d100"}>{page}</Button>
        <Button
          onClick={() => setPage((pre) => pre + 1)}
          isDisabled={page === 32 / 8}
          color={"#00d100"}
        >
          NEXT
        </Button>
      </Flex>
    </>
  );
};

export default Product;
