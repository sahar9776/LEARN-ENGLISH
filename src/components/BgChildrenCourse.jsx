import children from "../asstes/imges/children.png"

import chessIcon from "../asstes/icons/chess.png"
import magicTrickIcon from "../asstes/icons/magic-trick.png"
import umbrellaIcon from "../asstes/icons/umbrella.png"
import paletteIcon from "../asstes/icons/palette.png"

import { motion } from "framer-motion"
import { childVariants, parentVariants } from "../asstes/data/db"

function BgChildrenCourse() {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="show"
      className="w-full h-full relative hidden lg:block">
      <motion.img
        variants={childVariants}
        transition={{
          delatop: 3.8,
          ease: "easeLinear",
        }}
        src={children} alt="children" className="w-full lg:max-w-full h-auto lg:max-h-full
       absolute bottom-96 lg:bottom-0  left-[50%] -translate-x-[50%] z-50" />

      <motion.img
        variants={childVariants}
        initial={{ top: "-1024px" }}
        animate={{ top: "128px" }}
        transition={{
          ease: "linear",
          duration: 1.4,
          delay: 0.8,
          type:"spring"
        }}
        src={chessIcon} alt="chess Icon" className="w-20 h-20 absolute top-32 right-0 z-50" />

      <motion.img
        variants={childVariants}
        initial={{ top: "-1024px" }}
        animate={{ top: "8px" }}
        transition={{
          ease: "linear",
          duration: 1.4,
          delay: 1
        }}
        src={paletteIcon} alt="palette Icon" className="w-20 h-20 absolute top-2 right-28 z-50" />

      <motion.img
        variants={childVariants}
        initial={{ top: "-1024px" }}
        animate={{ top: "64px" }}
        transition={{
          ease: "linear",
          duration: 1.4,
          delay: 1.1
        }}
        src={magicTrickIcon} alt="magicTrick Icon" className="w-28 h-28 absolute top-16 left-5 z-50" />

      <motion.img
        variants={childVariants}
        initial={{ top: "-1024px" }}
        animate={{ top: "12px" }}
        transition={{
          ease: "linear",
          duration: 1.4,
          delay: 0.9
        }}
        src={umbrellaIcon} alt="umbrella Icon" className="w-24 h-24 absolute top-3 left-44 z-50" />
    </motion.div>
  )
}

export default BgChildrenCourse
