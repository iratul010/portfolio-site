import styled from "styled-components";
import bioImg from '../../data/img/bio-img.png';

const Details__Photo = styled.div`
 
  height: 100%;
  width: 50%;
  position:relative;
 
  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 80%;
    border-radius: 0 20% ;
  }
`;

function DetailsPhoto() {
  return (
    <Details__Photo>
      <img src={bioImg} alt="self-img" />
    </Details__Photo>
  );
}

export default DetailsPhoto;
