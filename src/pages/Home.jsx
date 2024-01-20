import styled from "styled-components";
import bg from "../data/img/self-img.jpg";
import Heading from "../ui/Heading";

const HomeDiv = styled.div`
  height: calc(100vh - 5rem);
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url(${bg});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-position: center;
`;

function Home() {
  return (
    <HomeDiv>
      <Heading>Home</Heading>
    </HomeDiv>
  );
}

export default Home;
