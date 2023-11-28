import { Box ,Text, Heading,Flex,HStack} from '@chakra-ui/react'
import React from 'react'
import Budget from '../components/Buget'
import Category from '../components/Category'
import ExpensesBar from '../components/ExpensesBar'
import Month from '../components/Month'

const Body = () => {

  
  return (
   <Box p="10px">
      <Budget/>
      <Month/>
      <ExpensesBar/>

      <Category />
   </Box>
 

  )
}

export default Body
