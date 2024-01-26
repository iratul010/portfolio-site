import styled from "styled-components";
import DetailsPhoto from "./DetailsPhoto";
import DetailsBio from "./DetailsBio";

const Sub__Details = styled.div`
  height: 100%;
  background-color: blue;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;


function SubDetails() {
  return (
    <Sub__Details>
      <DetailsPhoto/>
      <DetailsBio/>
    </Sub__Details>
  );
}

export default SubDetails;
