import {
    Box,
    Container,
    Heading,
    HStack,
    Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import { RiSecurePaymentFill } from 'react-icons/ri';
  import cancellationAndRefund from '../../assets/docs/cancellationAndRefund';
  
    const Cancellation = ({ cancellationAndRefund }) => (
    <Box>
      <Heading
        size={'md'}
        children="Cancellation & Refund"
        textAlign={['center', 'left']}
        my="4"
      />
  
      <Box h="sm" p="4" overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {cancellationAndRefund}
        </Text>
        <Heading
          my="4"
          size={'xs'}
          children="Refund only applicable for cancellation within 7 days."
        />
      </Box>
    </Box>
  );
  
  
  const CancellationAndRefund = () => {
    return (
      <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
  
        <Cancellation cancellationAndRefund={cancellationAndRefund} />
  
  
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
  
  export default CancellationAndRefund;
  