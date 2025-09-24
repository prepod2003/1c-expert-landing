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
      <About />
      <Services />
      <Portfolio />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
