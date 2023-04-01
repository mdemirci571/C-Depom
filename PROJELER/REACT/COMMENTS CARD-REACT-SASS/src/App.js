import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./scss/app.scss"
import data from "./data"
function App() {
  return (
    <div>
     <Header/>
     <Card data={data}/>
     <Footer/>
    </div>
  );
}

export default App;
