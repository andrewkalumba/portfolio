import { motion } from "framer-motion";
import { useState } from "react";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative z-10 w-full md:w-[40%] flex justify-center mt-10 md:mt-0"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}>

      <div
        className="relative w-56 h-80 [perspective:1000px]"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)} >

        <motion.div
          animate={{
            rotateY: isFlipped ? 180 : 0,
            scale: isFlipped ? 1.15 : 1,
          }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full [transform-style:preserve-3d]" >

          <div className="absolute inset-0 backface-hidden">
            <motion.img
              src="/mine.jpg"
              alt="Andrew Julius Kalumba"
              className="w-full h-full rounded-full shadow-2xl border-4 border-amber-50/20 object-cover"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          </div>

         <div className="absolute inset-0 flex items-center justify-center rounded-2xl shadow-2xl border-2 border-amber-50/20  text-gray-800 text-center text-sm font-semibold rotate-y-180 backface-hidden p-3">
  <div className="rounded-xl text-white p-3 text-left">
    Coding is the art of turning imagination into reality. It’s where logic meets creativity. Every bug solved feels like cracking a mystery, and every project built feels like creating magic. That’s why we love coding because it’s not just writing code, it’s crafting the future.
  </div>
</div>

        </motion.div>
      </div>
    </motion.div>
  );
}
