import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../ui/Footer";
import PageNav from "../components/PagNav";
import bg from "../data/img/self-img.jpg";
import Header from "../ui/Header";

const Main = styled.main`
  height: calc(100vh - 5rem);
  background-image: linear-gradient(to left bottom,
      rgba(57, 75, 54, 0.8),
      rgba(39, 104, 85, 0.8)
    ),
    url(${bg});
  background-size: cover;

  clip-path: polygon(0 0, 100% 0, 100% 75vh,0 100%);
  color: white;
  background-position: center;
`;
function Applayout() {
  return (
    <div>
      <Header />
      <Main>
        <PageNav />
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default Applayout;
