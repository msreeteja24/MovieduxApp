import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className = "container">{
      //Here we are using the Header component imported from the Header.js file
      }<Header></Header>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
