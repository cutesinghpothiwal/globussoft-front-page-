import "./App.css";
import AboutUs from "./component/about/about-tabs";
import Contact from "./component/contact/contac";
import Footer from "./component/footer/footer";
import Hero from "./component/hero/hero";
import WorkEthic from "./component/how-we-work/how-we-work";
import MarqueeText from "./component/marquee/marquee";
import Navbar from "./component/navbar/navbar";
import Qualities from "./component/qualities/qualities";

import Testimonials from "./component/trusted-brands/trust";


function App() {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto">
        <Hero />
        <AboutUs />
        <Qualities />
        <WorkEthic />
      </div>
      <MarqueeText />

      <div className="container mx-auto ">
        <Testimonials />

   
      </div>
      

      <Contact  />
      

      <div className="container mx-auto ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
