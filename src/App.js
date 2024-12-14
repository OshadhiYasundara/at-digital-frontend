import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <div className="font-sans">
      
      <div className ="bg-cover w-full h-screen justify-start content-end grid "
      style={{backgroundImage: "url('/herosection.png')"}}>                  
      
      <div class="w-[480px] p-6 m-20 bg-[linear-gradient(257deg,#1CBDDD_27.86%,#4DCA79_100%)]  ">
       <div className="w-[470px] text-white text-4xl font-bold capitalize">
        <div>We crush your</div>
        <div>competitors, goals, and</div>
        <div>sales records - without</div>
        <div> the B.S.</div>  
      </div>
      
      <div>
        <button class="bg-orange text-white px-5 py-2 mt-4 rounded-md">Get free consultation</button>
      </div>

      </div>  
  
       

      </div>  
      
</div>
    </div>
  );
}

export default App;
