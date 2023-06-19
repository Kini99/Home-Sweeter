import { Box, Button, Flex, Image, Text, useToast, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoHeartOutline, IoCartOutline, IoHeartSharp } from "react-icons/io5";
import { TbShare3 } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';


export const BuyproductCart = ({ product }) => {

    const token=localStorage.getItem("frontendtoken")

    const [wishlist, setWishlist] = useState(false)

    const handleToggle = () => {
        setWishlist(!wishlist)
    }

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

        <>
            <Flex flexDirection={"column"} gap={"2px"}>

                <Box borderRadius={"20px"} p={"10px"} backgroundColor={"#f4f4f4"} textAlign={"start"}>
                    <Flex justifyContent={"right"}>
                        {wishlist ? <IoHeartSharp size="25px" color={"606060"} onClick={handleToggle} /> : <IoHeartOutline size="25px" color={"606060"} onClick={handleToggle} />}
                        <TbShare3 size="25px" color={"606060"} onClick={handleModalOpen} style={{marginLeft:"15px", marginRight:"15px"}}></TbShare3>
                        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Share Link</ModalHeader>
                                <ModalBody>
                                    <Text>{currentUrl}/{product._id}</Text>
                                </ModalBody>
                                <ModalFooter>
                                    <CopyToClipboard text={`${currentUrl}/${product._id}`}>
                                        <Button colorScheme="blue" onClick={handleCopyLink}>
                                            Copy Link
                                        </Button>
                                    </CopyToClipboard>
                                    <Button colorScheme="gray" onClick={handleModalClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Flex>

                    <Flex>

                        <Image src={product.image} borderRadius={"10%"} w={"30%"} h={"150px"} marginBottom={"5px"} marginRight={"15px"}/>
                        <Box w={"45%"} marginRight={"15px"}>
                            <Link to={`/buyproduct/${product._id}`}>
                                <Text style={{fontWeight:"bold"}}>{product.details}</Text>
                                {product.building ? <Text color={"#606060"}>{product.building}</Text> : null}
                                <Flex style={{justifyContent:"space-between"}}>
                                    <Box>
                                        <Text style={{fontWeight:"bold"}}>Carpet Area</Text>
                                        <Text>{product.carpet}</Text>
                                    </Box>
                                    <div style={{border:"1px solid grey", width:"0.1px", height:"50px"}}></div>
                                    <Box>
                                        <Text style={{fontWeight:"bold"}}>Status</Text>
                                        <Text>{product.status}</Text>
                                    </Box>
                                    <div style={{border:"1px solid grey", width:"0.1px", height:"50px"}}></div>
                                    <Box>
                                        <Text style={{fontWeight:"bold"}}>Type</Text>
                                        <Text>{product.furnishing}</Text>
                                    </Box>
                                </Flex>
                                <br/>
                                <Text>{product.description.slice(0, 40)}{product.description.length > 50 && "..."}</Text>
                            </Link>
                        </Box>

                        <Box w={"25%"}>
                            <Text style={{fontWeight:"bolder"}}>₹ {product.total_price}</Text>
                            {product.price_per_sqft ? <Text style={{fontWeight:"normal"}}>(₹ {product.price_per_sqft})</Text> : null}
                            {token?<Button colorScheme='green' variant='outline' onClick={handleSchedulingModalOpen}>Schedule Appointment</Button>:<Link to="/signin"><Button colorScheme='green' variant='outline'>Schedule Appointment</Button></Link>}
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
                            {token?<Link to="/payment"><Button colorScheme='green' variant='outline'>Buy Now</Button></Link>:<Link to="/signin"><Button colorScheme='green' variant='outline'>Buy Now</Button></Link>}
                            <br />
                            <Link to="/calculator"><Button colorScheme='green' variant='outline'>{product.calculator}</Button></Link>
                        </Box>
                    </Flex>

                </Box>
            </Flex >
        </>

    )
}

