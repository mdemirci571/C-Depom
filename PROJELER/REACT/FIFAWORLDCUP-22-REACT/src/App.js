import Container from "react-bootstrap/Container";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer />
      <Footer/>
    </Container>
    
  );
}

export default App;
