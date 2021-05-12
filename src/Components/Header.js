import styled from "styled-components";
import logo from "../torimap_logo.png";

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <div style={{ marginTop: 38, fontWeight: "bold" }}>admin</div>
    </Container>
  );
};

export default Header;

const Logo = styled.img`
  height: auto;
  width: 300px;
`;

const Container = styled.div`
  height: 100px;
  background: #f8f8f8;
  color: #6e3ace;
  display: flex;
  align-items: center;
`;

