import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../ui/Footer";
import PageNav from "../components/PagNav";
import bg from "../data/img/self-img.jpg";
import Header from "../ui/Header";
 
const Main = styled.main`
  height: calc(100vh - 5rem);
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url(${bg});
  background-size: cover;
 
 
  color: white;
  background-position: center;
`;
function Applayout() {
  return (
    <div>
      <Header/>
      <Main>
      <PageNav />
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default Applayout;
