import styled from "styled-components";
import ServiceHeader from "./ServiceHeader";
import ServiceMain from "./ServiceMain";

const Service__Sub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  height: 100%;
  gap: 4rem;
 
 
`;

function SubService() {
  return (
    <Service__Sub>
      <ServiceHeader />
      <ServiceMain />
    </Service__Sub>
  );
}

export default SubService;
