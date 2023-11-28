
import React from 'react'
import { Box ,Text, Heading,Flex,HStack} from '@chakra-ui/react'
import BottomNavBarItems from '../components/BottomNavBarItems'
const BottomNavigationBar = () => {
  return (
  <Box 

  px="30px" py="20px" h="87px"  backgroundColor="rgba(255, 255, 255, 1)" marginTop="-50px" boxShadow ="rgba(0, 0, 0, 0.03)" >
   <BottomNavBarItems/>
  </Box>
  )
}

export default BottomNavigationBar