import {
    Box,
    Container,
    Heading,
    HStack,
    Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import { RiSecurePaymentFill } from 'react-icons/ri';
  import termsAndCondition from '../../assets/docs/termsAndCondition';
  
    const TandC = ({ termsAndCondition }) => (
    <Box>
      <Heading
        size={'md'}
        children="Terms & Condition"
        textAlign={['center', 'left']}
        my="4"
      />
  
      <Box h="sm" p="4" overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {termsAndCondition}
        </Text>
        <Heading
          my="4"
          size={'xs'}
          children="Refund only applicable for cancellation within 7 days."
        />
      </Box>
    </Box>
  );
  
  
  const TermsAndCondition = () => {
    return (
      <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
  
        <TandC termsAndCondition={termsAndCondition} />
  
  
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
  
  export default TermsAndCondition;
  