import { motion } from "framer-motion";
import { childVariants, parentVariants } from "../asstes/data/db";

function MotionTitle({title, content, contentTwo}) {
  return (
    <>
      <motion.h3
        variants={parentVariants}
        initial="hidden"
        animate="show"
        className="text-center text-2xl lg:text-4xl font-semibold"
      >
        {title.split("").map((character, index) => (
          <motion.span
            variants={childVariants}
            key={index + 1}
          // className=" bg-clip-text bg-gradient-to-r from-primary to-gold"
          >
            {character}
          </motion.span>
        ))}
      </motion.h3>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="show"
        className=" mt-3 lg:mt-6"
      >
        <motion.h4
          variants={childVariants}
          transition={{
            delay: 3.8,
            ease: "easeLinear",
          }}
          className="w-full lg:max-w-xl text-[16px] lg:text-lg font-semibold text-center mx-auto
          text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold"
        >
          {content}
          <br />
          {contentTwo}
        </motion.h4>

        {/* <motion.button
          variants={childVariants}
          transition={{
            delay: 4,
            ease: "easeLinear",
          }}
          className="bg-transparent rounded-lg py-1 px-2 lg:py-2 lg:px-4 mt-3.5 lg:mt-7
          text-primary/80 font-semibold border-2 border-primary/80 duration-700 ease-linear
          hover:text-white hover:bg-primary"
        >
          ثبت نام در دوره
        </motion.button> */}
      </motion.div>
    </>
  )
}

export default MotionTitle
