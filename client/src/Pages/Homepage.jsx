import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCarStore } from '../globals/car'
import CarCard from '../components/CarCard'

const Homepage = () => {
  const { fetchAllCars, cars } = useCarStore();

  useEffect(() => {
    fetchAllCars();
  }, [fetchAllCars])

  if (cars.length === 0) {
    return <h1>Loading cars...</h1>; // Show loading while data is being fetched
  }

  return (
    <Container>
      <VStack spacing={8}>
      <Text
          fontFamily='Bebas Neue, sans-serif'
          fontSize={{ base: '22', sm: '28' }}
          fontWeight='bold'
          textTransform='uppercase'
          textAlign='center'
          letterSpacing={1}
        >
        Browse cool cars
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={5} w='86vw'>
        {cars.map(car => (
          <Link key={car._id} to={`/car/${car._id}`} state={{ car }}>
            <CarCard car={car}/>
          </Link>
        ))}
      </SimpleGrid>

      {cars.length === 0 && (
        <Text fontSize='xl' textAlign='center' fontWeight='bold' color='gray.500'>
          No cars found.{' '}
          <Link to={'/add'}>
            <Text as='span' color='blue.500' _hover={{ textDecoration: 'underline' }}>
              Add one?
            </Text>
          </Link>
        </Text>
      )}
      </VStack>
    </Container>
  )
}

export default Homepage