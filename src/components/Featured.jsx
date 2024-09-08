import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const [Hovering1, setHovering1] = useState(false);
  const [Hovering2, setHovering2] = useState(false);
  return (
    <div className="w-full py-20 bg-black">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => {
              setHovering1(true);
            }}
            onMouseLeave={() => {
              setHovering1(false);
            }}
            className="card relative rounded-xl w-1/2 h-[75vh] "
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-[50%] top-1/2 -translate-y-[50%] z-[9] leading-none tracking-tighter text-8xl ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={Hovering1 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="card relative rounded-xl w-1/2 h-[75vh]"
            onMouseEnter={() => {
              setHovering2(true);
            }}
            onMouseLeave={() => {
              setHovering2(false);
            }}
          >
            <h1 className="absolute flex text-[#CDEA68] right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-[50%] z-[9] leading-none tracking-tighter text-8xl ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={Hovering1 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
