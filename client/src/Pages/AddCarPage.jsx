import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useCarStore } from '../globals/car';

function AddCarPage() {
  const [ newCar, setNewCar ] = useState({
    name: '',
    brand: '',
    top_speed: 0,
    acceleration: 0,
    handling: 0,
    nitro: 0,
    image: ''
  });
  const { addCar } = useCarStore();
  const toast = useToast();
  const handleAddCar = async () => {
    const { success, message } = await addCar(newCar);
    console.log(`Success: ${success}\nMessage: ${message}`);
    if (success) {
      toast({
        position: 'top-right',
        title: `${message}`,
        status: 'success',
        isClosable: true
      });
      setNewCar({
        name: '',
        brand: '',
        top_speed: 0,
        acceleration: 0,
        handling: 0,
        nitro: 0,
        image: ''
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
    <Container maxW={'container.sm'}>
      <VStack spacing={8}>
        <Heading
          as={'h1'}
          size={'2xl'}
          textAlign={'center'}
          mb={8}
        >
          Add a New Car
        </Heading>

        <Box
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          p={6}
          rounded={'lg'}
          shadow={'md'}
        >
          <VStack spacing={4}>
            <Input
              placeholder='Name'
              name='name'
              value={newCar.name}
              onChange={e => setNewCar({ ...newCar, name: e.target.value })}
            >
            </Input>
            <Input
              placeholder='Brand'
              name='brand'
              value={newCar.brand}
              onChange={e => setNewCar({ ...newCar, brand: e.target.value })}
            >
            </Input>
            <Input
              placeholder='Top speed'
              name='top_speed'
              value={newCar.top_speed}
              onChange={e => setNewCar({ ...newCar, top_speed: e.target.value })}
            >
            </Input>
            <Input
              placeholder='Acceleration'
              name='acceleration'
              value={newCar.acceleration}
              onChange={e => setNewCar({ ...newCar, acceleration: e.target.value })}
            >
            </Input>
            <Input
              placeholder='Handling'
              name='handling'
              value={newCar.handling}
              onChange={e => setNewCar({ ...newCar, handling: e.target.value })}
            >
            </Input>
            <Input
              placeholder='Nitro'
              name='nitro'
              value={newCar.nitro}
              onChange={e => setNewCar({ ...newCar, nitro: e.target.value })}
            >
            </Input>
            <Input
              placeholder='Image URL'
              name='image'
              value={newCar.image}
              onChange={e => setNewCar({ ...newCar, image: e.target.value })}
            >
            </Input>
            <Button colorScheme='blue' onClick={handleAddCar} w={'full'}>
              Submit
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default AddCarPage