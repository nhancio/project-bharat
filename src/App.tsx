import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import WhyHesa from './components/WhyHesa';
import Franchise from './components/Franchise';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-hesa-cream">
      <Navigation />
      <Hero />
      <Statistics />
      <About />
      <WhyHesa />
      <Franchise />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
