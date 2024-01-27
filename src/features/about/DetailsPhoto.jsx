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
    border-radius: 1% 20% ;
    /* box-shadow: 2px 2px  rgba(10, 151, 60, 0.5); */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    
  }
  &::before{
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-image: linear-gradient(to bottom, #00ffe53a, #c99859, #0000ff2b);
  
    opacity: 0.3;  
    border-radius: inherit;
     z-index: 1;
     box-shadow: 2px 3px 7px  rgba(6, 250, 95, 0.5);
     border-radius: 1% 20% ;
   
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
