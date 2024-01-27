import styled from "styled-components";
import SubService from "../features/service/SubService";
const Service = styled.section`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  color: white;
  background-color: rgb(41, 75, 57);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ;
`;
function Services() {
  return (
    <Service>
       <SubService/>
    </Service>
  );
}

export default Services;
