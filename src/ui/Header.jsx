import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  background: linear-gradient(90deg, rgb(12, 12, 2), rgb(35, 54, 22));
  align-items: center;
  justify-content: space-around;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    padding: 5px 100px;
    
  }
`;
const HeaderNavLink = styled(NavLink)`
 &:link,
 &:visited{
  color: #fff;
  transition: color 0.3s ease;
 }
 &:hover{
  color:  var(--color-green-700);
 }
  
`
function Header() {
  return (
    <HeaderDiv>
      <ul>
        <li>
          <HeaderNavLink
            to="https://www.linkedin.com/in/ratul-islam-19545618b/"
            target="_blank"
          >
            in
          </HeaderNavLink>
        </li>
        <li>
          <HeaderNavLink to="https://www.facebook.com/ratulislamweb/" target="_blank">
            fb
          </HeaderNavLink>
        </li>
        <li>
          <HeaderNavLink>G+</HeaderNavLink>
        </li>
      </ul>

      <ul>
        <li>
          <HeaderNavLink to="mailto:iratul010@gmail.com" target="_blank">
            iratul010@gmail.com
          </HeaderNavLink>
        </li>
        <li> 
          <HeaderNavLink to="tel:+8801784083508">+8801784083508</HeaderNavLink>
        </li>
      </ul>
    </HeaderDiv>
  );
}

export default Header;
