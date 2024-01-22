import styled from "styled-components";
import Heading from "../ui/Heading";
 
const MainContainer = styled.div`
  position: absolute;
  top: 50%;
  left:50%;
  margin: -150px;
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
function HomePage() {
  return (
    <div>
      <Heading>
        <MainContainer>
          <TheCard>
            <TheFront>The Front</TheFront>
            <TheBack>The Back</TheBack>
          </TheCard>
        </MainContainer>
      </Heading>
    </div>
  );
}

export default HomePage;
