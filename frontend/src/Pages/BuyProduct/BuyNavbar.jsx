
import React, { useEffect, useState } from 'react'
import { Box, Button, Select, Text, } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/BuyReducer/action';
import { useSearchParams } from 'react-router-dom';
// import { Flex } from '@chakra-ui/react'

const BuyNavbar = () => {

    const queryParams = new URLSearchParams(window.location.search);

    const [page, setPage] = useState(1);
    const [sortByPrice, setSortByPrice] = useState(queryParams.get('sortByPrice') || '');
    const [sortBySize, setSortBySize] = useState(queryParams.get('sortBySize') || '');
    const [status, setStatus] = useState(queryParams.get('status') || '');
    const [furnishing, setFurnishing] = useState(queryParams.get('furnishing') || '');
    const [ownership, setOwnership] = useState(queryParams.get('ownership') || '');
    const [type, setType] = useState(queryParams.get('type') || '');
    const [transaction, setTransaction] = useState(queryParams.get('transaction') || '');

    const [searchParam, setSearchParam] = useSearchParams();
    const dispatch = useDispatch()

    const updateQueryParams = () => {
        queryParams.set('sortByPrice', sortByPrice);
        queryParams.set('sortBySize', sortBySize);
        queryParams.set('status', status);
        queryParams.set('furnishing', furnishing);
        queryParams.set('ownership', ownership);
        queryParams.set('type', type);
        queryParams.set('transaction', transaction);

        const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
        window.history.pushState(null, '', newUrl);
        window.location.reload();
    };

    let allParams = {
        params: {
            page: page,
            search: searchParam.getAll('search'),
            status: searchParam.getAll('status'),
            furnishing: searchParam.getAll('furnishing'),
            ownership: searchParam.getAll('ownership'),
            type: searchParam.getAll('type'),
            transaction: searchParam.getAll('transaction'),
            sortByPrice: searchParam.getAll('sortByPrice'),
            sortBySize: searchParam.getAll('sortBySize'),
        },
    };

    useEffect(() => {
      
        dispatch(getProducts(allParams));
        
    }, [allParams]);

    return (
        <div>
            <Box style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "10px", margin: "20px", }}>
                <Button>
                    <Text>Agent Listings (500+)</Text>
                </Button>

                <Select value={sortByPrice} placeholder='Any Price' style={{ backgroundColor: "#edf2f7" }} onChange={(e) => setSortByPrice(e.target.value)}>
                    <option value='HighToLow'>High To Low</option>
                    <option value='LowToHigh'>Low To High</option>
                </Select>

                <Select value={sortBySize} placeholder='All Sizes' style={{ backgroundColor: "#edf2f7" }} onChange={(e) => setSortBySize(e.target.value)}>
                    <option value='LargeToSmall'>Large To Small</option>
                    <option value='SmallToLarge'>Small To Large</option>
                </Select>

                <Select value={status} placeholder='Status' style={{ backgroundColor: "#edf2f7" }} onChange={(e) => setStatus(e.target.value)}>
                    <option value='Ready to Move'>Ready to Move</option>
                    <option value="Poss. by Oct '23">Poss. by Oct '23</option>
                </Select>

                <Select value={furnishing} placeholder='Furnishing' style={{ backgroundColor: "#edf2f7" }} onChange={(e) => setFurnishing(e.target.value)}>
                    <option value='Semi-Furnished'>Semi-Furnished</option>
                    <option value='Furnished'>Furnished</option>
                    <option value='Unfurnished'>Unfurnished</option>
                </Select>

                <Select value={ownership} placeholder='Ownership' style={{ backgroundColor: "#edf2f7" }} onChange={(e) => setOwnership(e.target.value)}>
                    <option value='Freehold'>Freehold</option>
                    <option value='Leasehold'>Leasehold</option>
                    <option value='Co-operative Society'>Co-operative Society</option>
                </Select>

                <Select value={type} placeholder='Type' style={{ backgroundColor: "#edf2f7" }} onChange={(e) => setType(e.target.value)}>
                    <option value='Premium Member'>Premium Member</option>
                </Select>

                <Select value={transaction} placeholder='Transaction' style={{ backgroundColor: "#edf2f7" }} onChange={(e) => setTransaction(e.target.value)}>
                    <option value='New Property'>New Property</option>
                    <option value='Resale'>Resale</option>
                </Select>

                <Button colorScheme='green' variant='outline' onClick={updateQueryParams}>
                    Save Search
                </Button>
            </Box>
        </div>
    )
}

export default BuyNavbar