import React from 'react'
import { motion } from 'framer-motion'
import styles from './Landing.module.scss'
import { slideUp } from './anime'
import Image from 'next/image'

function LandingComponent() {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <div><motion.p initial="initial" animate="enter" variants={slideUp(0)}>Kalp </motion.p></div>
                <div><motion.p initial="initial" animate="enter" variants={slideUp(1)}>Chaudhary</motion.p></div>
            </div>

        </div>
    )
}

export default LandingComponent