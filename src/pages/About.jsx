import styled from "styled-components";
import SubHeader from "../features/about/SubHeader";
import SubDetails from "../features/about/SubDetails";

const About__Main = styled.section`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const About__Sub = styled.div`
  width: 80%;
  height: 80%;
  background-color: #beafaf4d;
  display: flex;
  flex-direction: column;
`;

function About() {
  return (
    <About__Main>
      <About__Sub>
        <SubHeader />
        <SubDetails />
      </About__Sub>
    </About__Main>
  );
}

export default About;
