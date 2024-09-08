import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full h-full rounded-xl flex justify-center items-center bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 rounded-full border-[1px] border-[#CDEA68] text-[#CDEA68] bottom-8 left-8">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative w-1/2 h-full flex justify-center items-center rounded-2xl bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 rounded-full border-[1px] text-white uppercase tracking-tighter bottom-8 left-8">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative w-1/2 h-full flex justify-center items-center rounded-2xl bg-[#212121]">
          <img
            className="w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-3 py-1 rounded-full border-[1px] text-white uppercase tracking-tighter bottom-8 left-8">
            Business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
