import { Box, Heading, HStack, Stack, VStack, Text, Link,Image} from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import logo from '../../../assets/images/logo.png'

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']} spacing="8">
      <VStack alignItems={['center', 'flex-start']} width="full">
      <Heading children="All Rights Reserved" color={'white'} />
      <Heading
        fontFamily={'body'}
        size="sm"
        children="Vishesh Pandey"
        color={'yellow.400'}
      />
      <Image src={logo} alt="Logo" boxSize="120px" />
    </VStack>

        <VStack alignItems={['center', 'flex-start']} spacing="2">
          <Heading size="md" color={'white'}>Services</Heading>
          <Link href="/termsAndCond" color={'yellow.400'}>Terms and Conditions</Link>
          <Link href="/cancellation" color={'yellow.400'}>Cancellation and Refund</Link>
          <Link href="/shipping" color={'yellow.400'}>Shipping and Delivery</Link>
          <Link href="/privacypolicy" color={'yellow.400'}>Privacy Policy</Link>
        </VStack>

        <VStack alignItems={['center', 'flex-start']} spacing="2">
          <Heading size="md" color={'white'}>Get in Touch</Heading>
          <Text color={'yellow.400'}>Vishesh Pandey</Text>
          <Text color={'yellow.400'}>7800603750</Text>
          <Text color={'yellow.400'}>vishesh2300@gmail.com</Text>
          <Text color={'yellow.400'}>Jhunsi, Prayagraj</Text>
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://youtube.com" target={'blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://instagram.com" target={'blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com" target={'blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
