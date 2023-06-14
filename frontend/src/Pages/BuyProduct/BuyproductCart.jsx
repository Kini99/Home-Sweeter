import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useToast} from '@chakra-ui/react'

const ProductCart = ({product}) => {
    const userAuth=useSelector((store)=>store.AuthReducer.userAuth)
    const dispatch=useDispatch()
    const toast = useToast()
    const navigate=useNavigate()
    const handleAdd=()=>{
        if(userAuth===false){
            toast({
                title: 'Please Login First.',
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position:'top'
              }) 
              navigate("/login") 
        }else{
            navigate('/singleproduct')
        }
    }
    return (
        <Flex flexDirection={"column"} gap={"2px"}>
            <Box borderTopRadius={"20px"} p={"10px"} backgroundColor={"#f4f4f4"} textAlign={"center"}>
                <Flex justifyContent={"right"}>
                    <IoHeartOutline size="20px" color={"606060"}/>
                </Flex>
                <Link to={`/product/${product.id}`}>
                    <Image src={product.image} borderRadius={"50%"} m={"auto"} w={"60%"} onClick={handleAdd}/>
                    <Text color={"#606060"}>₹ {product.price}</Text>
                    <Text noOfLines={1} as={"b"}>{product.name}</Text>
                    <Text color={"#606060"}>{product.quantity} kg</Text>
                </Link>
            </Box>
        </Flex>
    )
}

export default ProductCart
