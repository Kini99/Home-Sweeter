import { Box, Button, Flex, Text, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Amenities from "./Amenities.png";
import axios from 'axios';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentUrl = window.location.href;

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleCopyLink = () => {
        alert('Link copied!');
    };

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
                <Button onClick={handleSchedulingModalOpen}>Schedule Appointment</Button>
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
                            <br />
                            {token?<Link to="/payment"><Button>Buy Now</Button></Link>:<Link to="/login"><Button>Buy Now</Button></Link>}
                            <br />
                            {token?<Link to="/calculator"><Button>{currentProduct.calculator}</Button></Link>:<Link to="/login"><Button>{currentProduct.calculator}</Button></Link>}
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