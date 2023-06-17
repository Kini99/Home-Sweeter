import React from 'react';
import { Box, Container, Flex, Grid, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
  return (
    <div id="lastfooter">
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      py={10}
      mt={8}
      px={4}
    >
      <Container maxW={'8xl'}>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={10}
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <Flex direction="column">
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Social Media
            </Text>
            <Link href={'#'} display="flex" alignItems="center" mb={2}>
              <FaInstagram size={20} style={{ marginRight: '0.5rem' }} />
              Instagram
            </Link>
            <Link href={'#'} display="flex" alignItems="center" mb={2}>
              <FaFacebook size={20} style={{ marginRight: '0.5rem' }} />
              Facebook
            </Link>
            <Link href={'#'} display="flex" alignItems="center" mb={2}>
              <FaTwitter size={20} style={{ marginRight: '0.5rem' }} />
              Twitter
            </Link>
            <Link href={'#'} display="flex" alignItems="center">
              <FaLinkedin size={20} style={{ marginRight: '0.5rem' }} />
              LinkedIn
            </Link>
          </Flex>
          <Flex direction="column">
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Company
            </Text>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Community</Link>
            <Link href={'#'}>Reviews</Link>
            <Link href={'#'}>FAQ</Link>
          </Flex>
          <Flex direction="column">
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Gift Cards
            </Text>
            <Link href={'#'}>Buy gift card</Link>
            <Link href={'#'}>About gift card</Link>
            <Link href={'#'}>Redeem gift card</Link>
            <Link href={'#'}>Corporate gift card</Link>
          </Flex>
          <Flex direction="column">
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Explore
            </Text>
            <Link href={'#'}>Men</Link>
            <Link href={'#'}>Women</Link>
            <Link href={'#'}>Accessories</Link>
            <Link href={'#'}>Winter</Link>
          </Flex>
        </Grid>
      </Container>
    </Box>
    
    </div>
  );
};

export default Footer;
