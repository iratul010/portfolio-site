import styled from "styled-components";
const Service__Main = styled.div`
  height: 80%;
  width: 100%;
  text-align: center;
`;
const Service__Sub = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  gap: 5rem;
  justify-content: center;
  flex-direction: row;
`;
// const Service__Card = styled.div`
//   height: 35rem;
//   width: 45rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   padding: 10px;
//   overflow: hidden;
//   background-color: #1c1b29;
//   border-radius:5px;
//   &::before {
//     content: "";
//     width: 150%;
//     height: 150%;
//     top: -25%;
//     left: -25%;
//     position: absolute;
//     background-image: conic-gradient(#89978b5f 20deg, transparent 70deg);
//     /* border-bottom: 2px solid red;
//     border-left: 2px solid red;
//     border-right: 2px solid red; */
//     opacity: 0.6;
//     /* transform: scale(0.96, 0.96); */
//     /* box-sizing: border-box; */
//     animation: rotate 2s infinite linear;
//     @keyframes rotate {
//       100% {
//         transform: rotate(-360deg);
//       }
//     }
//   }

//   &::after {
//     content: "";
//     width: 94%;
//     height: 94%;
//     top: 3%;
//     left: 3%;
//     background-color: #1c1b29;
//     border-radius: 5px;
//     position: absolute;
//     /* border-top: 2px  solid red;
//     border-left: 2px solid red;
//     border-right:2px solid red; */
//     /* background: radial-gradient(
//       ellipse at 50% 5%,
//       rgba(47, 53, 40, 0.413) 15%,
//       transparent 100%
//     ); */
//   }

//   h2 {
//     font-size: 2.2rem;
//     font-weight: 300;
//   }
//   & p {
//     margin: 1rem;
//     padding: 0.5rem;
//   }
// `;
const Service__Card = styled.div`
  height: 35rem;
  width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(to top, rgba(255, 0, 0, 0) 22%, #6d7b5e);

  border-radius: 5px;
  &::before {
    content: "";
    height: 98%;
    width: 98%;
    top: 1%;
    left: 1%;
    position: absolute;
    background: radial-gradient(
        100% 100% at 50% 0%,
        rgba(57, 110, 55, 0.17) 0%,
        rgba(13, 17, 26, 0) 100%
      ),
      #131722;
      border-radius: 5px;
    transition: all 0.3s;
  }
  &:hover::before {
    content: "";
    height: 98%;
    width: 98%;
    top: 1%;
    left: 1%;
    position: absolute;
    border: 4px solid #5e695180;
    border-top: 0px ;
    border-radius: 5px;
  } 

  h2 {
    font-size: 2.2rem;
    font-weight: 300;
    z-index: 1;
  }
  & p {
    margin: 1rem;
    padding: 0.5rem;
    z-index: 1;
  }
`;
function ServiceMain() {
  return (
    <Service__Main>
      <Service__Sub>
        <Service__Card>
          <h2>WEBSITE DESIGN</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            minima at, dolorum quaerat non facere blanditiis repellendus optio
            nemo! Quis quos quaerat, dolorem laborum deleniti rem quam iste
            labore!
          </p>
        </Service__Card>
        <Service__Card>
          <h2>LOGO DESIGN</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            minima at, dolorum quaerat non facere blanditiis repellendus optio
            nemo! Quis quos quaerat, dolorem laborum deleniti rem quam iste
            labore!
          </p>
        </Service__Card>
        <Service__Card>
          <h2>MEARN STACK</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            minima at, dolorum quaerat non facere blanditiis repellendus optio
            nemo! Quis quos quaerat, dolorem laborum deleniti rem quam iste
            labore!
          </p>
        </Service__Card>
      </Service__Sub>
    </Service__Main>
  );
}

export default ServiceMain;
