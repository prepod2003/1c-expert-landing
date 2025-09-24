import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Services />
      </div>
      <div className="section">
        <Portfolio />
      </div>
      <div className="section">
        <TechStack />
      </div>
      <div className="section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
