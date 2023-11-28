import React from 'react'
import { Box ,Text, Heading,Flex,HStack} from '@chakra-ui/react'
const BottomNavBarItems = ({img}) => {
  return (
 
  <Flex justify="space-between">
   <Flex flexDirection="column" alignItems="center" justifyContent="center">
  <img src="taskImages/home.png" alt="" width="23.53px" height="20px"/>
   <Text
     fontSize="12px"
     fontWeight="450"
     color="rgba(112, 116, 128, 1)"
   >Home</Text>
   </Flex>
   <Flex flexDirection="column" alignItems="center" justifyContent="center">
  <img src="taskImages/report.png" alt="" width="25px" height="20px"/>
   <Text
     fontSize="12px"
     fontWeight="450"
     color="rgba(112, 116, 128, 1)"
   >Reports</Text>
   </Flex>
   <Flex flexDirection="column" alignItems="center" justifyContent="center">
  <img src="taskImages/chat.png" alt="" width="23px" height="23px"/>
   <Text
     fontSize="12px"
     fontWeight="450"
     color="rgba(112, 116, 128, 1)"
   >Chats</Text>
   </Flex>
   <Flex flexDirection="column" alignItems="center" justifyContent="center">
  <img src="taskImages/budget.png" alt="" width="23px" height="20px"/>
   <Text
     fontSize="12px"
     fontWeight="450"
     color="
     rgba(0, 18, 51, 1)"
   >Budget</Text>
   </Flex>
   <Flex flexDirection="column" alignItems="center" justifyContent="center">
  <img src="taskImages/profile.png" alt="" width="23px" height="23px"/>
   <Text
     fontSize="12px"
     fontWeight="450"
     color="rgba(112, 116, 128, 1)"
   >Profile</Text>
   </Flex>
  </Flex >
  )
}

export default BottomNavBarItems
