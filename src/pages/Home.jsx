import styled, { keyframes } from "styled-components";
import Heading from "../ui/Heading";
/*
const MainContainer = styled.div`
  position: absolute;
  top: 60%;
  left:50%;
  // margin: -150px; 
  transform: translate(-50%,-50%);//middle 
  width: 230px;
  height: 320px;
`;

const TheCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`;
const TheFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #ffc728;
`;
const TheBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: #333;
`;
*/
const Div = styled.div`
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const moveInLeft = keyframes`
  0%{
      opacity: 0;
      transform: translateX(-100px);
  }
  80%{
       transform: translateX(10px);
  }
  100%{
      opacity: 1;
      transform: translate(1);
  }
`
const moveInRight = keyframes`
  0%{
      opacity: 0;
      transform: translateX(100px);
  }
  80%{
    transform: translateX(-10px);
  }
  100%{
      opacity: 1;
      transform: translate(1);
  }
`
const StyledHeading = styled(Heading)`
  letter-spacing: 1.2rem;
  text-shadow: 0.3rem 0.3rem 1.5rem black;
  animation: ${moveInLeft} 1s ease-out;
  /* animation-duration:1s;
  animation-timing-function: ease-out; */
  /* animation-delay:2s;
  animation-iteration-count: 3; */
  
`;
const P = styled.p`
  letter-spacing: 0.7rem;
  animation-name: ${moveInRight} ;//animation: name s timing-function;
  animation-duration:1s;
  animation-timing-function: ease-out;
`;

function HomePage() {
  return (
    <Div>
      <StyledHeading>WEB DEVELOPER</StyledHeading>
      <P>Ratul Islam</P>

      {/* <MainContainer>
          <TheCard>
            <TheFront>The Front</TheFront>
            <TheBack>The Back</TheBack>
          </TheCard>
        </MainContainer> */}
    </Div>
  );
}

export default HomePage;
