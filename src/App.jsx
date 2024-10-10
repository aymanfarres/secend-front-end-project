import { Element } from "react-scroll";
import './App.css';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/join/Join';
import Services from './components/Services/Services';
import Subscribe from './components/subscribe/Subscribe';

function App() {
  return (
    <div className="overflow-x-hidden bg-white text-primary">
      <Element name="/" className="section">
        <Hero />
      </Element>

      <Element name="services" className="section">
        <Services />
      </Element>

      <Element name="contact" className="section">
        <Subscribe />
      </Element>

      <Element name="about" className="section">
        <Join />
      </Element>

      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
}

export default App;
