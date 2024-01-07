import styled from "@emotion/styled";
import media from "../styles/media";
import { Link } from "react-router-dom";
import themes from "../styles/themes";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Link to="/">
          <p>
            Oluwatobi Mayowa <br />
            Data driven UX
          </p>
        </Link>
      </div>
      <NavbarLinks>
        <Link to="/work">
          <p>Work</p>
        </Link>
        <Link to="/writing">
          <p>Writing</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </NavbarLinks>
      <NewProject>
        <p>Available for new projects</p>
      </NewProject>
      <MobileLinks>
        <p>Menu</p>
      </MobileLinks>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  font-family: monospace;
  height: 80px;
  padding: 20px 40px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${themes.colors.black};
  }

  ${media.mobile} {
    padding: 20px 20px;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  text-align: center;

  p {
    width: 218px;
  }

  ${media.smallDesktop} {
    display: none;
  }
`;

const NewProject = styled.div`
  ${media.smallDesktop} {
    display: none;
  }
`;

const MobileLinks = styled.div`
  display: none;
  text-decoration: underline;
  ${media.smallDesktop} {
    display: block;
  }
`;
