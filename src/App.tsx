import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

import Home from './pages/Home'
import About from './pages/About'
import TopHeader from './components/common/TopHeader/TopHeader'
import Header from './components/common/Header/Header'
import Newsletter from './components/common/Newsletter/Newsletter'
import Footer from './components/common/Footer/Footer'
import Gallery from './pages/Gallery';
import Accommodation from './pages/Accommodation';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Newsletter />
      <Footer />

    </>
  )
}

export default App