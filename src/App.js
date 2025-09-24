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
      <div className="section-card">
        <About />
      </div>
      <div className="section-card">
        <Services />
      </div>
      <div className="section-card">
        <Portfolio />
      </div>
      <div className="section-card">
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
