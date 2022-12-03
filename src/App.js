import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import Partners from './components/Partners/Partners';
import Services from './components/Services/Services';
import Vision from './components/Vision/Vision';
import Solutions from './components/Solutions/Solutions'
import WCU from './components/WCU/WCU'
import Gallery from './components/Gallery/Gallery'
import Member from './components/Member/Member'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <div>
     <Navigation />
     <HeroSection />
     <Partners />
     <Services />
     <Vision />
     <Solutions />
     <WCU />
     <Gallery />
     <Member />
     <Footer />
    </div>

  );
}

export default App;
