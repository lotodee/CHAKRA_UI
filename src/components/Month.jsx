import React from 'react'
import { Box ,Text, Heading,Flex,HStack} from '@chakra-ui/react'
const Month = () => {
  return (
  <Flex p="10px" justify="space-between" alignItems="center">
    <Flex  justify="space-between" gap="30px">

    <Text 
    fontSize="16px"
    fontWeight="400"
    color="rgba(112, 116, 128, 1)"
    >Last Month
    </Text>
    <Flex w="100px" gap={2} >
    <Text
    pb="5px"
     fontSize="16px"
     fontWeight="400"
     color="rgba(4, 102, 200, 1)"
     borderBottom="1px"
     borderColor="rgba(4, 102, 200, 1)"
    >This</Text>

    <Text>
    <Text
     fontSize="16px"
     fontWeight="400"
     color="rgba(4, 102, 200, 1)"
  
    >Month</Text>   
    </Text> 
    </Flex>
   

    </Flex>
   
        <img src="taskImages/dots.png" alt="dots" style={{ width: '30px' ,height:'16px'}} />
    
  </Flex>
  )
}

export default Month
