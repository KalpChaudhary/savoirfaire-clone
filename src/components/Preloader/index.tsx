"use client"
import React, { useEffect, useState } from 'react'
import StarSVG from '../../../public/assets/icons/StarSVG'
import styles from './Preloader.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { slideRight, svgAnim } from './anime'

function Preloader() {

  // States to control the visibility and animation stages
  const [startSvgAnimation, setStartSvgAnimation] = useState(false);
  const [removeSvgWrapper, setRemoveSvgWrapper] = useState(false);

  // Your existing code for animations and variants

  // Assuming you have a way to know when slideRight animations are all done
  // For simplicity, let's say we wait for the last slideRight animation to complete
  useEffect(() => {
    // Simulate a delay or condition to start SVG animations
    // This should ideally be tied to the actual completion of your text animations
    const timer = setTimeout(() => setStartSvgAnimation(true), 3000); // Adjust time based on slideRight animation duration

    return () => clearTimeout(timer);
  }, []);

  // Variant for the parent container
  const containerVariants = {
    initial: {},
    enter: {
      transition: {
        staggerChildren: 0.5, // Adjust this value for more or less delay between each child
      },
    },
  };




  return (
    <div className={styles.main}>
      {startSvgAnimation && !removeSvgWrapper && (
        <div className={styles.svgWrapper}>
          {/* Each motion.div for StarSVG can use the onAnimationComplete prop */}
          <motion.div
            variants={svgAnim(0)}
            initial="initial"
            animate="enter"
            exit="exit"
            // onAnimationComplete={() => setRemoveSvgWrapper(true)} // Assuming the last SVG completes the whole sequence
            className={styles.starSVG}
          >
            <StarSVG color={"#ffff"} />
          </motion.div>
          <motion.div
            variants={svgAnim(1)}
            initial="initial"
            animate="enter"
            exit="exit"
            // onAnimationComplete={() => setRemoveSvgWrapper(true)} // Assuming the last SVG completes the whole sequence
            className={styles.starSVG}
          >
            <StarSVG color={"#ddf72d"} />
          </motion.div>
          <motion.div
            variants={svgAnim(2)}
            initial="initial"
            animate="enter"
            exit="exit"
            onAnimationComplete={() => setRemoveSvgWrapper(true)} // Assuming the last SVG completes the whole sequence
            className={styles.starSVG}
          >
            <StarSVG color={"#000"} />
          </motion.div>
          {/* More SVGs */}
        </div>
      )}
      <motion.div variants={containerVariants} initial='initial' animate='enter' className={styles.loadingWrapper}>
        <div><motion.p variants={slideRight} >00</motion.p></div>
        <div><motion.p variants={slideRight}>26</motion.p></div>
        <div><motion.p variants={slideRight}>49</motion.p></div>
        <div><motion.p variants={slideRight}>74</motion.p></div>
        <div><motion.p variants={slideRight}>99</motion.p></div>
      </motion.div>
    </div>
  )
}

export default Preloader