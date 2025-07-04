
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Rooms from '../components/Rooms';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Rooms />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
