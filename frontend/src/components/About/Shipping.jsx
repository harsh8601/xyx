import {
    Box,
    Container,
    Heading,
    HStack,
    Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import { RiSecurePaymentFill } from 'react-icons/ri';
  import shipping from '../../assets/docs/shipping';
  
    const Shipping = ({ shipping }) => (
    <Box>
      <Heading
        size={'md'}
        children="Shipping and Delivery"
        textAlign={['center', 'left']}
        my="4"
      />
  
      <Box h="sm" p="4" overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {shipping}
        </Text>
        <Heading
          my="4"
          size={'xs'}
          children="Refund only applicable for cancellation within 7 days."
        />
      </Box>
    </Box>
  );
  
  
  const ShippingPolicy = () => {
    return (
      <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
  
        <Shipping shipping={shipping} />
  
  
        <HStack my="4" p={'4'}>
          <RiSecurePaymentFill />
          <Heading
            size={'xs'}
            fontFamily="sans-serif"
            textTransform={'uppercase'}
            children={'Payment is secured by Razorpay'}
          />
        </HStack>
      </Container>
    );
  };
  
  export default ShippingPolicy;
  