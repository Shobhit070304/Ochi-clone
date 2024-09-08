import React from "react";

function About() {
  return (
    <div className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black p-20 z-10 relative">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="flex gap-10 uppercase items-center px-8 py-4 bg-zinc-900 mt-10 rounded-full text-white">
            Read More <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
