import styled from "styled-components";

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
  height:80%;
  background-color: #beafaf4d;
  display: flex;
  flex-direction: column;
`;
const Sub__Header = styled.div`
height: 10rem;
background-color: yellow;
`;
const Sub__Details = styled.div`
height: 100%;
background-color:blue;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;
const Details__Photo = styled.div`
background-color: white;
height: 100%;
width: 50%;
`;
const Details__Bio = styled.div`
height: 100%;
width: 50%;
background-color:red`;
function About() {
  return (
    <About__Main>
      <About__Sub>
        <Sub__Header> </Sub__Header>
        <Sub__Details>
          <Details__Photo>Photo</Details__Photo>
          <Details__Bio>Details</Details__Bio>
        </Sub__Details>
      </About__Sub>
    </About__Main>
  );
}

export default About;
