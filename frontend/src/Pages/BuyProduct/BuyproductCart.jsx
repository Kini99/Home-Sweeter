import { Box, Button, Flex, Image, Text,useToast,Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoHeartOutline ,IoCartOutline} from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
export const BuyproductCart = ({product}) => {
    console.log("Buy product cart",product);
    //const userAuth=useSelector((store)=>store.AuthReducer.userAuth)
    const dispatch=useDispatch()
    const toast = useToast()
    const navigate=useNavigate()
   // const handleAdd=()=>{
    //     if(userAuth===false){
    //         toast({
    //             title: 'Please Login First.',
    //             status: 'warning',
    //             duration: 3000,
    //             isClosable: true,
    //             position:'top'
    //           }) 
    //           navigate("/login") 
    //     }else{
    //         navigate('/singleproduct')
    //     }
    // }
    return (
        
        <>
        
        <Flex flexDirection={"column"} gap={"2px"}>
            <Box borderTopRadius={"20px"} p={"10px"} backgroundColor={"#f4f4f4"} textAlign={"start"}>
                <Flex justifyContent={"right"}>
                    <IoHeartOutline size="20px" color={"606060"}/>
                </Flex>
                <Link to={`/product/${product.id}`}>
                    <Image src={product.image} borderRadius={"10%"}  w={"70%"} marginBottom={"5px"}  />
                    <Text color={"#606060"} as={"b"}> ₹ {product.total_price}</Text>
                    <Text noOfLines={1} as={"b"}>{product.description}</Text>
                    
                    <Text color={"#606060"}><Image    width={"25px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpW1s308Id74vI6DkOCsBqmHo3mKpoaGtKaSUnrQdKsw&usqp=CAU&ec=48600113'/>{product.bathroom}ba , {product.carpet} </Text>
                    <Text color={"#606060"} > Status:{product.furnishing}, Details:{product.details}</Text>
                    
                </Link>
            </Box>
        </Flex>
        </>
        
    )
}

