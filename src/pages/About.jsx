import styled from "styled-components";
import SubHeader from "../features/about/SubHeader";
import SubDetails from "../features/about/SubDetails";
import { PropTypes } from "prop-types";
import  { useEffect, useRef } from "react";
const About__Main = styled.section`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color:rgb(41,75,57);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const About__Sub = styled.div`
  width: 80%;
  height: 80%;
   
  display: flex;
  flex-direction: column;
`;

function About({ setRef }) {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    // Access the DOM element using the ref after the component has mounted
    setRef(aboutSectionRef.current);
 
  }, [setRef]);

  return (
    <About__Main  ref={aboutSectionRef}>
      <About__Sub>
        <SubHeader />
        <SubDetails />
      </About__Sub>
    </About__Main>
  );
}

About.propTypes = {
  setRef: PropTypes.func,
};

export default About;