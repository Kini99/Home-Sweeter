
import React from 'react'
import { Box,Button,Select,Text, } from '@chakra-ui/react'
// import { Flex } from '@chakra-ui/react'
const BuyNavbar = () => {
  return (
    <div>
        <Box style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",  gap:"10px",margin:"20px",}}>
            <Button>
                <Text>Agent Listings (500+)</Text>
            </Button>
           
            <Button>
                <Text>Others (500+)</Text>
            </Button>
            <Button>
            <Select placeholder='Any Price'>
                <option value='Min'>Min Price</option>
                <option value='Max'>Max Price</option>
            </Select>
            </Button>
            <Button>
            <Select placeholder='All Beds'>
                <option value='Studio+'>Studio+</option>
                <option value='1+'>1+</option>
                <option value='2+'>2+</option>
                <option value='3+'>3+</option>
                <option value='4+'>4+</option>
            </Select>
            </Button>
            <Button>
            <Select placeholder='All Home Types'>
                <option value='House'>House</option>
                <option value='Condo'>Condo</option>
                <option value='Townhome'>Townhome</option>
                <option value='Multi-Family'>Multi-Family</option>
                <option value='Land'>Land</option>
            </Select>
            </Button>
            <Button colorScheme='green' variant='outline'>
    Save Search
  </Button>
        </Box>
    </div>
  )
}

export default BuyNavbar