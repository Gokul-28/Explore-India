import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Tours from './component/Tour';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <About />
     <Services />
     <Tours />
     <Footer />
    </div>
  );
}

export default App;
