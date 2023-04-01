import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <Container>
      <Image src={logo} width="200px"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">TOP 10</h1>
    </Container>
  );
};
export default Header;
