import styled from "styled-components";
import Heading from "../../ui/Heading";
 
 
const Details__Bio = styled.div`
  color: #f0fdf2;
  height: 100%;
  width: 50%;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding: 5rem;
   
  & ${Heading} {
    font-size: 4rem;
  }
`;
const P = styled.p``;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const Li = styled.li`
  margin-right: 2rem;
  position: relative;
  right: -4rem;
 
  &::before  {
    opacity: 0.9;
    content: ''; /* Replace with the Unicode value of your FontAwesome icon */
  
    position: absolute;
    top: 0;
    left: -4rem;
    width: 30px;
    height: 30px;
    margin-right: 20px;
    display:inline-flex !important;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background:radial-gradient(100% 100% at 50% 0%, rgba(120, 119, 198, 0.35) 0%, rgba(13, 17, 26, 0.05) 100%);
    border-bottom: 1px solid #b6f605;
    box-shadow: 0px 5px 20px 5px  rgba(85, 143, 10, 0.451);
   
  }
  
  .fa-check::before {
    height: 40px;
    width: 40px;
    font-size: 1.8rem;
    font-weight: 900;
    position: absolute;
    top:.7rem;
    left: -3.3rem;
}

  
`;
function DetailsBio() {
  return (
    <Details__Bio>
      
    
      <Heading as="h1">Quick Know About Myself</Heading>
      <P>
        Hi, I&apos;m Ratul Islam, a passionate web designer with 2 years of
        experience. I excel in FrontEnd and have common skills in Backend.
        Committed to delivering top-notch, creative solutions, I bring both
        expertise and dedication to my work.
      </P>
      <Ul>
        <Li><i className="fa-solid fa-check"></i> I approach my work with unwavering self-confidence.</Li>
        <Li><i className="fa-solid fa-check"></i>I am not committed to leaving any task unfinished.</Li>
        <Li><i className="fa-solid fa-check"></i> Engage with every endeavor with a blend of care and honesty.</Li>
      </Ul>
    </Details__Bio>
  );
}

export default DetailsBio;
