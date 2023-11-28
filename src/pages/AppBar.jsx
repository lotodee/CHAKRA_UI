import { Box, Container,Text, Flex, HStack } from '@chakra-ui/react'
import React from 'react'

const AppBar = () => {
  return (
 <Box  p="10px" w="375px" h="44px">
  <Flex justify="space-between">
    <Text>9:41</Text>
    <HStack>
      <img src='taskImages/bars.png'/>
      <img src='taskImages/Wi-Fi.png'/>
      <img src='taskImages/Battery.png'/>
    </HStack>
  </Flex>
  
 </Box>
  )
}

export default AppBar
