import styled, { keyframes } from "styled-components";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
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
const MainHeader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backface-visibility: hidden;
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
`;
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
`;
const moveInBottom = keyframes`
  0%{
      opacity: 0;
      transform: translateY(30px);
  }
  80%{
    transform: translateY(-5px);
  }
  100%{
      opacity: 1;
      transform: translate(1);
  }
`;
const StyledHeading = styled(Heading)`
  letter-spacing: 1.2rem;
  text-shadow: 0.3rem 0.3rem 1.5rem black;
  animation: ${moveInLeft} 1s ease-out;
  display: block;
  /* animation-duration:1s;
  animation-timing-function: ease-out; */
  /* animation-delay:2s;
  animation-iteration-count: 3; */
`;
const P = styled.p`
  display: block;
  letter-spacing: 0.7rem;
  animation-name: ${moveInRight}; //animation: name s timing-function;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  margin-bottom: 10px;
`;
const ServiceBtn = styled(Button)`
  text-transform: uppercase;
  transition: all 0.2s;
  border-radius: 100px;
  position: relative;
  animation: ${moveInBottom} .5s ease-out .75s;
  animation-fill-mode: backwards;
  &:link,
  &:visited {
    color: black;
    display: inline-block;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
   &:focus {
    outline: 2px solid;
  }

   &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    
  } 
 
   &.white-btn::after {
    background-color: white;
  } 

    &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }  
`;
function HomePage() {
  return (
    <div>
      <MainHeader>
        <div>
          <StyledHeading>WEB DEVELOPER</StyledHeading>
          <P>Ratul Islam</P>
        </div>

        <ServiceBtn className="white-btn" size="large" variant="primary">
          My Services
        </ServiceBtn>
        {/* <MainContainer>
          <TheCard>
            <TheFront>The Front</TheFront>
            <TheBack>The Back</TheBack>
          </TheCard>
        </MainContainer> */}
      </MainHeader>
    </div>
  );
}

export default HomePage;
