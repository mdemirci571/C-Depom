import Container from "react-bootstrap/Container";
import { data } from "../helpers/data";
const CardContainer = () => {
  return <Container>{data.map((player) => console.log(player))}</Container>;
};
export default CardContainer;
