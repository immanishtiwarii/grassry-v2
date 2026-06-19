"use client"
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import TrustBar     from './components/TrustBar';
import Projects     from './components/Projects';
import WhyGrassry   from './components/WhyGrassry';
import Services     from './components/Services';
import Process      from './components/Process';
import Styles       from './components/Styles';
import Partnerships from './components/Partnerships';
import Testimonials from './components/Testimonials';
import Maintenance  from './components/Maintenance';
import CTA          from './components/CTA';
import Footer       from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Projects />
        <WhyGrassry />
        <Services />
        <Process />
        <Styles />
        <Partnerships />
        <Testimonials />
        <Maintenance />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
