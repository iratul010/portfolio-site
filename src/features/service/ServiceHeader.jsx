import styled from "styled-components";
import Heading from "../../ui/Heading";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  height: 20%;
  width: 35%;
 
   h2 {
    padding: .5rem;
    text-align: center;
    text-shadow: 1px 1.4px black;
    text-transform: uppercase;
  }
  h1 {
    padding: .5rem;
    background-color: black;
    font-size: 3.8rem;
    font-weight: 600;
    text-align: center;
  }
`;

function ServiceHeader() {
  return (
    <Div>
      <Heading as="h2">My Services</Heading>
      <Heading as="h1">
        Weaving narratives through design and innovation.
      </Heading>
    </Div>
  );
}

export default ServiceHeader;
