import Navbar from "../Components/landing/Navbar";
import Hero from "../Components/landing/Hero";
import Features from "../Components/landing/Features";
import Testimonial from "../Components/landing/Testimonial";
import FAQ from "../Components/landing/FAQ";
import CTA from "../Components/landing/CTA";
import Footer from "../Components/landing/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
