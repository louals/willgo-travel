import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import VisaProcess from '../components/VisaProcess';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <VisaProcess />
      <Contact />
    </main>
  );
};

export default Home;
