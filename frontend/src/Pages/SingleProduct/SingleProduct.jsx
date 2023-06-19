import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Amenities from "./Amenities.png";
import axios from 'axios';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter 
  } from '@chakra-ui/react';

const SingleProduct = () => {

    const {id}=useParams();
    const token=localStorage.getItem("frontendtoken")
    const [currentProduct, setCurrentProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const singlePage = async() => {
        setLoading(true)
       let data=await axios.get(`${process.env.REACT_APP_SERVER}/property/${id}`)
       .then(res => {
            setCurrentProduct(res.data)
        }).catch(err => {
            console.log(err)
        }).finally(()=>{
           setLoading(false)
        })
    }

    useEffect(() => {
        singlePage()
    }, [])

    const addToCart=()=>{
      localStorage.setItem("cart",currentProduct.total_price_num)
    }

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const currentUrl = window.location.href;

    // const handleModalOpen = () => {
    //     setIsModalOpen(true);
    // };

    // const handleModalClose = () => {
    //     setIsModalOpen(false);
    // };

    // const handleCopyLink = () => {
    //     alert('Link copied!');
    // };

    const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [appointmentType, setAppointmentType] = useState('');

    const handleSchedulingModalOpen = () => {
        setIsSchedulingModalOpen(true);
    }
    const handleSchedulingModalClose = () => {
        setIsSchedulingModalOpen(false);
    }
    const handleScheduleAppointment = () => {
        alert(`Appointment scheduled for ${selectedDate} at ${selectedTime}. Type: ${appointmentType}`);
        handleSchedulingModalClose();
    };

return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={currentProduct.image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 ,lg:1}}>
          
             <Box as={'header'}>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: 'xl', sm: 'xl', lg: '2xl' }}>
                    {currentProduct.details}
                </Heading>
                <Text
                    color={useColorModeValue('gray.900', 'gray.400')}
                    fontWeight={300}
                    fontSize={'2xl'} width={"20%"}>
                    ₹{currentProduct.total_price}
                </Text>
                </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              {currentProduct.building?<Text
                color='gray.500'
                fontSize={'2xl'}
                fontWeight={'300'}>
                {currentProduct.building}
              </Text> : null}
              <Text fontSize={'lg'}>
              {currentProduct.description}
              </Text>
            </VStack>
            {/* <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box> */}
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Property Details
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg:3 }} spacing={10}>
              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Floor:
                  </Text>{' '}
                  {currentProduct.floor?currentProduct.floor:null}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Owner:
                  </Text>{' '}
                  {currentProduct.owner?currentProduct.owner:null}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Carpet Area:
                  </Text>{' '}
                  {currentProduct.carpet?currentProduct.carpet:null}
                </ListItem>
                </List>
                <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Facing:
                  </Text>{' '}
                  {currentProduct.facing?currentProduct.facing:null}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Balcony:
                  </Text>{' '}
                  {currentProduct.balcony?currentProduct.balcony:"N/A"}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Bathroom:
                  </Text>{' '}
                  {currentProduct.bathroom?currentProduct.bathroom:null}
                </ListItem>
                </List>

                <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Car Parking:
                  </Text>{' '}
                  {currentProduct.car_parking?currentProduct.car_parking:"N/A"}{' '}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Furnishing:
                  </Text>{' '}
                  {currentProduct.furnishing?currentProduct.furnishing:"N/A"}{' '}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Status:
                  </Text>{' '}
                  {currentProduct.status?currentProduct.status:null}{' '}
                </ListItem>
                </List>

                <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Overlooking:
                  </Text>{' '}
                  {currentProduct.overlooking?currentProduct.overlooking:"N/A"}{' '}
                </ListItem>
              </List>
            </SimpleGrid>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={4}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            onClick={handleSchedulingModalOpen}
            >
           Schedule Appointment
          </Button>
          
            <Modal isOpen={isSchedulingModalOpen} onClose={handleSchedulingModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Schedule Appointment</ModalHeader>
                    <ModalBody>
                        <label>Date:</label>
                        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

                        <label>Time:</label>
                        <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />

                        <label>Appointment Type:</label>
                        <select value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
                            <option value="">Select</option>
                            <option value="In-person">In-person</option>
                            <option value="Virtual">Virtual</option>
                        </select>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={handleScheduleAppointment}>
                            Schedule
                        </Button>
                        <Button colorScheme="gray" onClick={handleSchedulingModalClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

          {token?<Link to="/payment"> <Button
            rounded={'none'}
            w={'full'}
            mt={1}
            size={'lg'}
            py={'7'}
            bg={'gray.900'}
            color={'white'}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }} 
            onClick={addToCart}
            >
           Buy Now
          </Button></Link>:<Link to="/signin"><Button
            rounded={'none'}
            w={'full'}
            mt={1}
            size={'lg'}
            py={'7'}
            bg={'gray.900'}
            color={'white'}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
           Buy Now
          </Button></Link>}

          <Link to="/calculator"> <Button
            rounded={'none'}
            w={'full'}
            mt={1}
            size={'lg'}
            py={'7'}
            bg={'gray.900'}
            color={'white'}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
           {currentProduct.calculator}
          </Button></Link>
            
        </Stack>
       
      </SimpleGrid>
            <Box>
                <Image src={Amenities} alt="Amenities"></Image>
            </Box>
    </Container>
  );
}

export default SingleProduct;