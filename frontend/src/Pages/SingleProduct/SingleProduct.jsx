import { Box, Button, Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Amenities from "./Amenities.png";

const SingleProduct = () => {

const {id}=useParams();
console.log(id)

const {product,isloading }=useSelector((store)=>{
    return store.BuyReducer
  },shallowEqual)

  console.log(product);

  const currentProduct=product.filter((e)=>e._id==id)[0];

  console.log(currentProduct);

  return (
    <div>
        <Box>
            <Text>{currentProduct.total_price}</Text>
            <Text>{currentProduct.details}</Text>
            <Flex>
            <Image src={currentProduct.image} borderRadius={"10%"} w={"40%"} h={"150px"} marginBottom={"5px"} />
            <Box>
                <Flex>
                    <Text>{currentProduct.ownership} Property</Text>
                    <Text>{currentProduct.furnishing}</Text>
                    <Text>{currentProduct.status}</Text>
                    <Text>Carpet Area : {currentProduct.carpet}</Text>
                </Flex>
                <Flex>
                    {currentProduct.floor?<Box><Text>Floor</Text><Text>{currentProduct.floor}</Text></Box>:null}
                    {currentProduct.facing?<Box><Text>Facing</Text><Text>{currentProduct.facing}</Text></Box>:null}
                    {currentProduct.overlooking?<Box><Text>Overlooking</Text><Text>{currentProduct.overlooking}</Text></Box>:null}
                    {currentProduct.bathroom?<Box><Text>Bathroom</Text><Text>{currentProduct.bathroom}</Text></Box>:null}
                    {currentProduct.balcony?<Box><Text>Balcony</Text><Text>{currentProduct.balcony}</Text></Box>:null}
                    {currentProduct.car_parking?<Box><Text>Car Parking</Text><Text>{currentProduct.car_parking}</Text></Box>:null}
                </Flex>
                {currentProduct.description}
                <br/>
                <Button>Schedule Appointment</Button>
                <Button>Buy Now</Button>
                <Link to="/calculator"><Button>{currentProduct.calculator}</Button></Link>
            </Box>
            </Flex>
        </Box>
        <Box>
<Image src={Amenities} alt=""></Image>
        </Box>
    </div>
  )
}

export default SingleProduct