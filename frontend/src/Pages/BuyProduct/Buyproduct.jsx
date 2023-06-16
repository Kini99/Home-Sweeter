import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../Redux/BuyReducer/action";
import { Box, Button, Flex, Grid, Stack,Skeleton } from "@chakra-ui/react";
import {BuyproductCart} from "./BuyproductCart"
import BuyNavbar from "./BuyNavbar";





export const Buyproduct = () => {
  const [page, setPage] = useState(1);
  const [searchParam, setSearchParam] = useSearchParams();
  const dispatch = useDispatch();

  const {product,isloading }=useSelector((store)=>{
    return store.BuyReducer
  },shallowEqual)

  
  let allParams = {
    params: {
      category: searchParam.getAll("category"),
      _limit: 8,
      _page: page,
    },
  }
  useEffect(() => {
    dispatch(getProducts(allParams));
  }, [page]);


  if (isloading) {
    return (
      
      <Grid
        w={"90%"}
        m={"auto"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
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
    <BuyNavbar/>
      <br />
      <Grid
        gridTemplateColumns={{
          xl: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          base: "repeat(2,1fr)",
        }}
        gap={5}
        w={{ xl: "85%", lg: "85%", md: "85%", sm: "95%", base: "95%" }}
        m={"auto"}
      >
        {product?.map((el) => {
         
          console.log(el,"test")
          return ( <BuyproductCart  key={el.id}  product={el} />);
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
