import styled from "styled-components";
import logo from "../data/logo/logo.png";
import resume from "../data/resume/Ratul_Resume.pdf";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  height: 65px;
  justify-content: space-between;
  background-color: rgba(13, 13, 13, 0.44);
  padding: 5px 100px;
  text-align: center;
  z-index: 100;
  backdrop-filter: blur(4px);
`;
const Navlist = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  list-style: none;
  gap: 3rem;
`;
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  &:hover {
    color: var(--color-green-700);
  }

  &.active {
    color: #fff;

    background: linear-gradient(90deg, #a2e2a211, #c2dbbe10);
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: var(--color-yellow-700);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  /* background: linear-gradient(90deg, #337d2a, #dcdcdc); */
  background: linear-gradient(90deg, #168d24, #3c658f);
  /* background: linear-gradient(90deg, #ffcc00, #ff6699); */
  background-size: 200% 100%;
  color: #ffffff;
  transition: background-position 0.3s ease, color 0.3s ease;

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  &:hover {
    background-position: -100% 0;
    color: #fff;
  }
`;

const Img = styled.img`
  height: auto;
  width: 200px;
  padding: 0;
  margin-right: 100px;
`;
function PageNav() {
  return (
    <Nav>
      <a href="/homepage">
        <Img src={logo} />
      </a>

      <Navlist>
        <li>
          <NavLinkStyled to="/homepage">Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/services">Services</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/about">About</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/projects">Projects</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/skills">Skills</NavLinkStyled>
        </li>
        <li>
          <Link href={resume} download>
            Download Resume
          </Link>
        </li>
        <li>
          <NavLinkStyled to="/blog">Blog</NavLinkStyled>
        </li>
      </Navlist>
    </Nav>
  );
}

export default PageNav;
