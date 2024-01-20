import { Outlet } from "react-router-dom"
 
import styled from "styled-components"
import Footer from "../ui/Footer"
import Header from '../ui/Header'
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
