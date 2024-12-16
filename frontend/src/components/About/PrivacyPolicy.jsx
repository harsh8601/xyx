import {
    Box,
    Container,
    Heading,
    HStack,
    Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import { RiSecurePaymentFill } from 'react-icons/ri';
  import privacyPolicy from '../../assets/docs/privacyPolicy';
  
    const Privacy = ({ privacyPolicy }) => (
    <Box>
      <Heading
        size={'md'}
        children="Privacy Policy"
        textAlign={['center', 'left']}
        my="4"
      />
  
      <Box h="sm" p="4" overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {privacyPolicy}
        </Text>
        <Heading
          my="4"
          size={'xs'}
          children="Refund only applicable for cancellation within 7 days."
        />
      </Box>
    </Box>
  );
  
  
  const PrivacyPolicy = () => {
    return (
      <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
  
        <Privacy privacyPolicy={privacyPolicy} />
  
  
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
  
  export default PrivacyPolicy;
  