import React from 'react'
import { Box ,Text, Heading,Flex,HStack} from '@chakra-ui/react'
import CategoryItems from './CategoryItems'
const Category = () => {
  return (
   <Box p="10px" marginTop="15px" >
    <Flex flexDirection="column">
<Text
marginBottom="25px"
 fontSize="21px"
 fontWeight="500"

>Category Breakdown</Text>

<CategoryItems text={"Food and Drink"} img={"taskImages/food.png"} percent={"40%"} FAmount={"₦20,000/"} SAmount={"₦42,000"}/>
<CategoryItems text={"Savings"} img={"taskImages/savings.png"} percent={"20%"} FAmount={"₦10,000/"} SAmount={"₦24,000"}/>
    </Flex>
   </Box>
  )
}

export default Category
