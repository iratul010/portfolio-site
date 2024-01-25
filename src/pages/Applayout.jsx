import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../ui/Footer";
import PageNav from "../components/PagNav";
 
import Header from "../ui/Header";
const StyledAppLayout = styled.div`
    /* display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh; */
 
`
const Container = styled.div`
background-color: rgba(1, 86, 38, 0.684); 
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 
`
const Main = styled.main`
 
`;
 
function Applayout() {
  return (
    <StyledAppLayout>
      <Main>
      <Header />
        <Container>
        <PageNav />
        <Outlet />
        </Container>
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default Applayout;
