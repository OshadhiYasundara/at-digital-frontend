import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import ServiceComponent from "./components/ServiceComponent";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <div className="font-sans">
      
      <div className ="bg-cover h-screen xl:h-[700px] justify-start content-end grid "
      style={{backgroundImage: "url('/herosection.png')"}}>                  
      
      <div class="w-[480px] p-6 m-20 bg-[linear-gradient(257deg,#1CBDDD_27.86%,#4DCA79_100%)]  hidden lg:grid">
       <div className="w-[470px] text-white text-4xl font-bold capitalize">
        <div>We crush your</div>
        <div>competitors, goals, and</div>
        <div>sales records - without</div>
        <div> the B.S.</div>  
      </div>
      <div>
        <Button text={"Get free consultation"}/>
      </div>
      </div>  

      </div>  

      <div class=" xl:px-20 xl:py-6 bg-[linear-gradient(257deg,#1CBDDD_27.86%,#4DCA79_100%)]  lg:hidden">
       <div className=" text-white text-4xl font-bold capitalize">
        <div>We crush your competitors,</div>
        <div>goals, and sales records - </div>
        <div>without the B.S.</div>
      </div>
      <div>
        <Button text={"Get free consultation"}/>
      </div>

      </div>  
      
</div>

<div className="lg:px-40 md:px-10">
<ServiceComponent align={'left'} image={"/webDev.png"} title={"Web & Mobile App Development"} description={"Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."}/>

<ServiceComponent align={'right'} image={"/consulting.png"} title={"Digital Strategy Consulting"} description={"Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."}/>

<FAQSection/>
</div>
<Footer/>
    </div>
  );
}

export default App;
