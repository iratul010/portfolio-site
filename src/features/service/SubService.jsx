import styled from "styled-components"
import ServiceHeader from "./ServiceHeader"
import ServiceMain from "./ServiceMain"

const Service__Sub = styled.div``

function SubService() {
  return (
    <Service__Sub>
      <ServiceHeader/>
      <ServiceMain/>
    </Service__Sub>
  )
}

export default SubService
