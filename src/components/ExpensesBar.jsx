import React from 'react'
import { Box ,Text, Heading,Flex,HStack} from '@chakra-ui/react'
const ExpensesBar = () => {
  return (
    <Flex flexDirection="column" alignItems="center" marginTop="30px" gap="15px" >
        <Flex alignItems="center" justifyContent="center" >
        <img src='taskImages/49.png' width="150px" height="150px"/>
        </Flex>
       
        <Text
        fontSize="14px"
        fontWeight="400"
        >Amount Spent So far</Text>
        <Flex>
            <Text
            fontSize="16px"
            fontWeight="400"
            color="rgba(4, 102, 200, 1)"
            >₦50,000
               </Text>
                <Text
                fontSize="16px"
                fontWeight="400"
                color="rgba(103, 162, 220, 1)"
                >
                /₦120,000</Text>
        </Flex>
    </Flex>
  )
}

export default ExpensesBar
