import React from 'react'
import { Box ,Text, Heading,Flex,HStack} from '@chakra-ui/react'
const CategoryItems = ({text ,img, percent,SAmount,FAmount}) => {
  return (
    <Flex justify="space-between" marginBottom="20px">
    <Box w="157" h="50">
    <Flex h="50px" justify="space-between" gap="2">
        <img src={img} alt="" width="50px" height="50px" />
        <Flex flexDirection="column">
            <Text
             fontSize="14px"
             fontWeight="500"
          
            >{text}</Text>
            <Text
               fontSize="14px"
               fontWeight="400"
               color="
               rgba(112, 116, 128, 1)"
            >{percent}</Text>
        </Flex>
    </Flex>
    </Box>
    <Flex>
        <Text
        fontSize="16px"
        letterSpacing="-0.5%"
        fontWeight="400"
        color="
        rgba(0, 18, 51, 1)"
        textAlign="right"
        >{FAmount}</Text>
        <Text
             letterSpacing="-0.5%"
        fontSize="16px"
        fontWeight="400"
        textAlign="right"
        color="
        
rgba(193, 196, 205, 1)"
        >{SAmount}</Text>
    </Flex>
</Flex>
  )
}

export default CategoryItems
