import './App.css';
import Header from "./components/MyHeader.js";
import Hero from './components/Hero';
import Services from "./components/Services";
import Sales from "./components/Sales";
import Inter from "./components/Inter";
import Currency from "./components/Currency";
import Blog from './components/Blog';
import Employ from "./components/Employment";
import Scan from "./components/Scan";
import Device from "./components/Devices";
import Footer from './components/Footer';
import Lastsec from "./components/Last";
import Hardware from './components/Hardware.js';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Hardware/>
      <Inter />
      <Sales />
      <Currency />
      <Blog />
      <Employ />
      <Scan />
      <Device />
      <Footer />
      <Lastsec />
    </>
  );
}

export default App;
