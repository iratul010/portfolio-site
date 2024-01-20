import styled from "styled-components";
import logo from "../data/logo/logo.png";
import resume from "../data/resume/Ratul_Resume.pdf";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 10px 80px;
`;
const Navlist = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  list-style: none;
  margin: 0;
  gap: 0.7rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--color-yellow-700);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  &:hover {
    background-color: #f5f2f2;
  }
`;

const Img = styled.img`
  height: auto;
  width: 200px;
  padding: 0;
  margin-right: 100px;
   
`;
function Header() {
  return (
    <Nav>
      <a href="/home">
        <Img src={logo} alt="" />
      </a>

      <Navlist>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href={resume} download>
            Download Resume
          </Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </Navlist>
    </Nav>
  );
}

export default Header;
