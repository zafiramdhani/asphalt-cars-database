import { Box, Button, Heading, HStack, Image, useColorModeValue, useToast } from '@chakra-ui/react'
import React from 'react'
import { useCarStore } from '../globals/car';

const CarCard = ({ car }) => {
  const bg = useColorModeValue('white', 'gray.700');
  const { deleteCar } = useCarStore();
  const toast = useToast();

  const handleDeleteCar = async id => {
    const { success, message } = await deleteCar(id)
    if (success) {
      toast({
        position: 'top-right',
        title: `${message}`,
        status: 'success',
        isClosable: true
      });
    } else {
      toast({
        position: 'top-right',
        title: `${message}`,
        status: 'error',
        isClosable: true
      });
    }
  };

  return (
    <Box
      bg={bg}
      role='group'
      position='relative'
      shadow='lg'
      rounded='lg'
      overflow='hidden'
      textAlign='center'
      transition='all 0.1s'
      _hover={{ md: { transform: 'scale(1.07)', shadow: 'xl', cursor: 'pointer' }}}
    >
      <HStack spacing={2} position='absolute' right={0}>
        <Button colorScheme='blue'>✏</Button>
        <Button colorScheme='red' onClick={() => handleDeleteCar(car._id)}>❌</Button>
      </HStack>
      <Heading transition='all 0.1s' _groupHover={{ md: { paddingBottom: '30px' }}} as='h3' bg='linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)' width='100%' bottom={0} pb={3} pt={5} position='absolute' color='white' fontFamily='Rubik, sans-serif' fontWeight={700} fontStyle='italic' textTransform='uppercase' size='md' textShadow="2px 2px 10px rgba(0, 0, 0, 0.8)">{car.name}</Heading>
      <Image src={car.image} alt={car.name} h={48} w='full' objectFit={'cover'} />
    </Box>
  )
}

export default CarCard