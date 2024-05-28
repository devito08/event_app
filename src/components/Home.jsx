import React from "react";
import Footer from "./Footer";




const Home = () => {
  return (
    <div className="bg-slate-50">
     
      
      <div className="flex my-10">
        <div className="my-10 text-zinc-950 ">
          <h1 className="font-bold font-weight:50 text-6xl mx-32 py-10">Host, Connect, <br/>Celebrate:Your<br/>Events, Our Platform!</h1>
          <div className="font-semibold text-xl mx-32 my-2">
            <p2>Book and learn helpful tips from 3,168+ mentors in<br/>
            world-class companies with our global community</p2>
            
          </div>
          <div className="mx-32">
          <button className="my-6 font-bold bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full" >Explore Now</button>
          </div>
        </div>
        <div className="right mx-2">
          <img src="./images/front.png" alt="front" className="mx-12 my-24"/>
        </div>
        
        

      </div>
      <div className="bg-slate-200 py-20">
        <div className="text-5xl mx-32 font-bold font-sans">
          <h2>Trusted By</h2>
          <h2>Thousands of Events</h2>
        </div>
      <div className="my-14">
        
        <form class="max-w-md mx-32">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
       

      </div>
      </div>
      <Footer/>
      
    </div>
    
  );
}

export default Home;
