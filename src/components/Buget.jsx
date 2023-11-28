import React from 'react'
import { Box ,Text, Heading,Flex,HStack} from '@chakra-ui/react'
const Budget = () => {

    const SecondBox={
        marginTop: "10px",
          px :"5px",
          bg : "green.100",
          h : "51px",
          w : "315px",
    
         
         paddingBottom:"10px",
         paddingTop:"5px",
         paddingLeft:"15px",
          backgroundColor : "rgba(255, 255, 255, 1)",
          borderRadius : "10px",
          boxShadow : "0 4px 8px rgba(0, 0, 0, 0.1)" 
            }
            const textBox={
              padding:``
            }
  return (
    <Box   p="10px">
        
    <Flex flexDirection="column" w="87" h="36" marginTop="15px" >
        <Heading fontWeight="700" fontSize="28">
            Budget
        </Heading>
       <HStack  spacing="2" marginTop="30px">
        <img src='taskImages/naira.png'/>
        <Text>Monthly Income</Text>
       </HStack>
       <Box sx={SecondBox}>
        
      <Text fontWeight="700"  fontSize="28">₦120,000</Text>
     </Box>
    </Flex>

    </Box>
  )
}

export default Budget
