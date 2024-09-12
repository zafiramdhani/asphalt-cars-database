import { Box, useColorModeValue } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import AddCarPage from './Pages/AddCarPage'
import Homepage from './Pages/Homepage'
import Navbar from './components/Navbar'
import CarDetails from './Pages/CarDetails'

function App() {

  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray,900')}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/add' element={<AddCarPage />} />
        <Route path='/car/:id' element={<CarDetails />} />
      </Routes>
    </Box>
  )
}

export default App
