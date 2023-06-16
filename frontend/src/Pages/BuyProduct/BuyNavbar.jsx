
import React, { useState } from 'react'
import { Box,Button,Select,Text, } from '@chakra-ui/react'
// import { Flex } from '@chakra-ui/react'
const BuyNavbar = () => {

const [sortByPrice,setSortByPrice]=useState("");
const [sortBySize,setSortBySize]=useState("");
const [status,setStatus]=useState("");
const [furnishing,setFurnishing]=useState("");
const [ownership,setOwnership]=useState("");
const [type,setType]=useState("");
const [transaction,setTransaction]=useState("");

  return (
    <div>
        <Box style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",  gap:"10px",margin:"20px",}}>
            <Button>
                <Text>Agent Listings (500+)</Text>
            </Button>
           
            <Select value={sortByPrice} placeholder='Any Price' style={{backgroundColor:"#edf2f7"}} onChange={(e)=>setSortByPrice(e.target.value)}>
                <option value='HighToLow'>High To Low</option>
                <option value='LowToHigh'>Low To High</option>
            </Select>
           
            <Select value={sortBySize} placeholder='All Sizes' style={{backgroundColor:"#edf2f7"}} onChange={(e)=>setSortBySize(e.target.value)}>
                <option value='LargeToSmall'>Large To Small</option>
                <option value='SmallToLarge'>Small To Large</option>
            </Select>
            
            <Select  value={status} placeholder='Status' style={{backgroundColor:"#edf2f7"}} onChange={(e)=>setStatus(e.target.value)}>
                <option value='Ready to Move'>Ready to Move</option>
                <option value="Poss. by Oct '23">Poss. by Oct '23</option>
            </Select>

            <Select value={furnishing} placeholder='Furnishing' style={{backgroundColor:"#edf2f7"}} onChange={(e)=>setFurnishing(e.target.value)}>
                <option value='Semi-Furnished'>Semi-Furnished</option>
                <option value='Furnished'>Furnished</option>
                <option value='Unfurnished'>Unfurnished</option>
            </Select>
           
            <Select value={ownership} placeholder='Ownership' style={{backgroundColor:"#edf2f7"}} onChange={(e)=>setOwnership(e.target.value)}>
                <option value='Freehold'>Freehold</option>
                <option value='Leasehold'>Leasehold</option>
                <option value='Co-operative Society'>Co-operative Society</option>
            </Select>

            <Select value={type} placeholder='Type' style={{backgroundColor:"#edf2f7"}} onChange={(e)=>setType(e.target.value)}>
                <option value='Premium Member'>Premium Member</option>
            </Select>

            <Select value={transaction} placeholder='Transaction' style={{backgroundColor:"#edf2f7"}} onChange={(e)=>setTransaction(e.target.value)}>
                <option value='New Property'>New Property</option>
                <option value='Resale'>Resale</option>
            </Select>

            <Button colorScheme='green' variant='outline'>
    Save Search
  </Button>
        </Box>
    </div>
  )
}

export default BuyNavbar