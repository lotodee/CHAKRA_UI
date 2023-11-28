import { Container } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import AppBar from "../pages/AppBar"
import Body from "../pages/Body"
import BottomNavigationBar from "../pages/BottomNavigationBar"

export default function RootLayout() {


  return (
    
      <Container border="1px solid gray" bg="rgba(252, 252, 252, 1)"  w="375px" p="0" 
      maxHeight="818px"
>
      <AppBar/>
    <Body/>
      <BottomNavigationBar/>
      </Container>

  )
}
