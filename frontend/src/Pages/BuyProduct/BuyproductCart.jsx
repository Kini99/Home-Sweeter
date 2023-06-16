import { Box, Button, Flex, Image, Text, useToast, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoHeartOutline, IoCartOutline, IoHeartSharp } from "react-icons/io5";
import { TbShare3 } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';


export const BuyproductCart = ({ product }) => {

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
        // Handle scheduling appointment logic
        alert(`Appointment scheduled for ${selectedDate} at ${selectedTime}. Type: ${appointmentType}`);
        handleSchedulingModalClose();
    };

    return (

        <>
            <Flex flexDirection={"column"} gap={"2px"}>

                <Box borderRadius={"20px"} p={"10px"} backgroundColor={"#f4f4f4"} textAlign={"start"}>
                    <Flex justifyContent={"right"}>
                        {wishlist ? <IoHeartSharp size="20px" color={"606060"} onClick={handleToggle} /> : <IoHeartOutline size="20px" color={"606060"} onClick={handleToggle} />}
                        <TbShare3 size="20px" color={"606060"} onClick={handleModalOpen}></TbShare3>
                        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Share Link</ModalHeader>
                                <ModalBody>
                                    <Text>{currentUrl}</Text>
                                </ModalBody>
                                <ModalFooter>
                                    <CopyToClipboard text={currentUrl}>
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

                        <Image src={product.image} borderRadius={"10%"} w={"40%"} h={"150px"} marginBottom={"5px"} />
                        <Box>
                            <Link to={`/buyproduct/${product._id}`}>
                                <Text>{product.details}</Text>
                                {product.building ? <Text color={"#606060"}>{product.building}</Text> : null}
                                <Flex>
                                    <Box>
                                        <Text>Carpet Area</Text>
                                        <Text>{product.carpet}</Text>
                                    </Box>
                                    <Box>
                                        <Text>Status</Text>
                                        <Text>{product.status}</Text>
                                    </Box>
                                    <Box>
                                        <Text>Type</Text>
                                        <Text>{product.furnishing}</Text>
                                    </Box>
                                </Flex>
                                <Text>{product.description.slice(0, 50)}{product.description.length > 50 && "..."}</Text>
                            </Link>
                        </Box>

                        <Box>
                            <Text>₹ {product.total_price}</Text>
                            {product.price_per_sqft ? <Text>₹ {product.price_per_sqft}</Text> : null}
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
                            <Button>Buy Now</Button>
                            <br />
                            <Link to="/calculator">{product.calculator}</Link>
                        </Box>
                    </Flex>

                </Box>
            </Flex >
        </>

    )
}

