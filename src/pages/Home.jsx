/* eslint-disable no-unused-vars */
import Hero from "../features/home/Hero";
import bg from "../data/img/self-img.jpg";
import styled from "styled-components";
import About from "../pages/About";
 import Services from "./Services";
import { useEffect, useRef, useState } from "react";
const Main__Section = styled.section`
  position: relative;
  top: -6.5rem;
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
  const elementRef = useRef(null);
   
  
  const [btn, setBtn] = useState(false);

   useEffect(()=>{
    const sectionOne = elementRef.current;
    if(!btn) return;
    if (btn) {
  
      /*//OLD-SCHOOL WAY
      if (sectionOne) {
        const s1coords = sectionOne.getBoundingClientRect();

        window.scrollTo({
          left: s1coords.left +  (window.pageXOffset),
          top: s1coords.top +  (window.pageYOffset),
          behavior: 'smooth'
        });
      }
      */
      //NEW WAY
      sectionOne.scrollIntoView({
        behavior: "smooth",
    
      });
      //again 
      setBtn(false);
    }
   },[btn])
   

  //   useEffect(function(){
  //    console.log(btn);
  //    const aboutSection = document.querySelector(".sectionOne");
  //   btn.addEventListener("click",  function(e) {
  //     console.log(e);
  //     e.preventDefault();

  //     const s1coords = aboutSection.getBoundingClientRect();
  //     // console.log(s1coords);
  //     console.log("btn", e.target.getBoundingClientRect());
  //     console.log("section", s1coords.x, s1coords.y);
  //     console.log(
  //       "Current-scroll:X/Y:",
  //       window.pageXOffset,
  //       window.pageYOffset
  //     );

  //   });
  //  },[btn])

  return (
    <div>
        
      <Main__Section>
        <Hero setBtn={setBtn} />
      </Main__Section>
      <div ref={elementRef} >
        <About />
      </div>
      <Services />
    </div>
  );
}

export default HomePage;
