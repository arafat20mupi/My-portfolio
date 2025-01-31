import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  const location = useLocation();

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Home ></Home>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
