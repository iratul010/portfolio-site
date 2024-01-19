import { Outlet } from "react-router-dom"
import Header from "../ui/Header"
import styled from "styled-components"
import Footer from "../ui/Footer"
const Main = styled.main`
  
`
function Applayout() {
  return (
    <div>
      <Header/>
      <Main>
      <Outlet/>
      </Main>
      <Footer/>
    </div>
  )
}

export default Applayout
