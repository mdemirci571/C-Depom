import './App.scss';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
