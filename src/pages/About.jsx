import styled from "styled-components";
import SubHeader from "../features/about/SubHeader";
import SubDetails from "../features/about/SubDetails";


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

function About() {
  /*
  import { PropTypes } from "prop-types";
  import  { useEffect, useRef } from "react";
  { setRef }
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    // Access the DOM element using the ref after the component has mounted
    setRef(aboutSectionRef.current);
 ref={aboutSectionRef}
 About.propTypes = {
  setRef: PropTypes.func,
};
  }, [setRef]);*/

  return (
    <About__Main  >
      <About__Sub>
        <SubHeader />
        <SubDetails />
      </About__Sub>
    </About__Main>
  );
}



export default About;