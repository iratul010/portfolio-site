import styled from "styled-components";
import Heading from "../../ui/Heading";

const Details__Bio = styled.div`
  color: white;
  height: 100%;
  width: 50%;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding:5rem;
  background-color: #1b3522f6;
  & ${Heading}{
    font-size: 4rem;
  }
   
`;
const P = styled.p`
  
`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`
const Li = styled.li`
 
 margin-right:2rem;
position: relative;
 right: -4rem;
   &::before{
        opacity: 0.7;
        content:"✔️";
        position: absolute;
        top: 0;
        left: -4rem;
        width: 30px;
        height: 30px;
        filter: invert(100%);
        color:#fff;
        border-radius:50%;
        border: 2px solid #333;
        border-bottom: 1px solid #fcf6f637;

   }
`
function DetailsBio() {
  return (
    <Details__Bio>
      <Heading as="h1">Quick Know About Myself</Heading>
      <P>
      Hi, I&apos;m Ratul Islam, a passionate web designer with 2 years of experience. I excel in FrontEnd and have common skills in Backend. Committed to delivering top-notch, creative solutions, I bring both expertise and dedication to my work.
      </P>
      <Ul>
        <Li>I approach my work with unwavering self-confidence.</Li>
        <Li>I am not committed to leaving any task unfinished.</Li>
        <Li>Engage with every endeavor with a blend of care and honesty.</Li>
      </Ul>
    </Details__Bio>
  )
}

export default DetailsBio
