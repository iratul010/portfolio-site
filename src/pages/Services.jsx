import styled from "styled-components";
import SubService from "../features/service/SubService";
const Service = styled.section`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  color: #f8f5f5 ;
  /* background-color: rgb(41, 75, 57); */
  background-color: black;
 
 
`;
function Services() {
  return (
    <Service>
       <SubService/>
    </Service>
  );
}

export default Services;
