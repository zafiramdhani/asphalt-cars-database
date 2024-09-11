import { Box, useColorModeValue } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import AddCarPage from './Pages/AddCarPage'
import Homepage from './Pages/Homepage'
import Navbar from './components/Navbar'

function App() {

  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray,900')}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/add' element={<AddCarPage />} />
      </Routes>
    </Box>
  )
}

export default App
