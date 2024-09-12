import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  let buttonText = {
    link: '',
    text: ''
  }

  if (location.pathname === '/add') {
    buttonText.text = 'Homepage'
    buttonText.link = '/'
  } else {
    buttonText.text = 'Add new car'
    buttonText.link = '/add'
  }

  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{ base: 'column', sm: 'row' }}
      >
        <Text
          fontFamily={'Bebas Neue, sans-serif'}
          fontSize={{ base: '22', sm: '28' }}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          textAlign={'center'}
          letterSpacing={1}
        >
          <Link to={'/'}>Asphalt Database</Link>
        </Text>

        <HStack spacing={2} alignItems={'center'} textTransform={'uppercase'}>
          <Link to={buttonText.link}>
            <Button>{buttonText.text}</Button>
          </Link>
          <Button onClick={toggleColorMode}>{ colorMode === 'light' ? 'Dark' : 'Light'}</Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar