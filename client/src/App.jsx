import { Box, Button } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Box minH={'100vh'}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/add' element={<AddPage />} />
      </Routes>
    </Box>
  )
}

export default App
