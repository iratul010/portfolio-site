import Hero from "../features/home/Hero";
import bg from "../data/img/self-img.jpg";
import styled from "styled-components";
import About from "../pages/About"
import { useState } from "react";
import Services from "./Services";
const Main__Section = styled.section`
 position: relative;
 top:-6.5rem;
  color: #f8f8f8d4;
  height: calc(100vh - 5rem);
  background-image: linear-gradient(
      to left bottom,
      rgba(57, 75, 54, 0.8),
      rgba(39, 104, 85, 0.8)
    ),
    url(${bg});
 
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  background-position: center;
 
  
`;

function HomePage() {
  
  const [ref,setRef] = useState(null);

  return (
    <div> 
      <Main__Section>
        <Hero Ref={ref} />
      </Main__Section>
       <About setRef={ setRef }/>
       <Services/>
    </div>
  );
}

export default HomePage;
