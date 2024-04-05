"use client"
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { motion, } from 'framer-motion'
import styles from './Landing.module.scss'
import { logoRotate, opacitySlideUp } from './anime'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CursorLogo from '../../../public/assets/icons/CursorLogo'
import StarSVG from '../../../public/assets/icons/StarSVG'
import { useGSAP } from "@gsap/react";


const scaleAnimation = {
    initial: { scale: 0, opacity: 0, x: "-50%", y: "-50%" },
    enter: {
        scale: 1,
        opacity: 1,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 4 },
    },
    // closed: {
    //     scale: 0,
    //     x: "-50%",
    //     y: "-50%",
    //     transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    // },
};

function LandingComponent() {
    const cursor = useRef(null);

    let xMoveCursor = useRef(null);
    let yMoveCursor = useRef(null);

    const slider = useRef(null);
    const firstSlider = useRef(null);
    const secondSlider = useRef(null);


    let xPercent = 0;
    let direction = -1;


    gsap.registerPlugin(useGSAP);



    //cursor movement
    useEffect(() => {

        //@ts-ignore
        xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
            duration: 0.5,
            ease: "power3",
        });
        //@ts-ignore

        yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
            duration: 0.5,
            ease: "power3",
        });
    }, []);





    //cursor movement
    const moveItems = (x: number, y: number) => {

        //@ts-ignore
        xMoveCursor.current(x);
        //@ts-ignore
        yMoveCursor.current(y);

    };


    //slider movement
    useGSAP(() => {
        // gsap code here...
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                // eslint-disable-next-line react-hooks/exhaustive-deps
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px"
        })
        requestAnimationFrame(animate);
    }); // <-- scope is for selector text (optional)



    //slider movement
    const animate = () => {

        if (!firstSlider.current || !secondSlider.current) return;

        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstSlider.current, { xPercent: xPercent })
        gsap.set(secondSlider.current, { xPercent: xPercent })

        xPercent += 0.04 * direction;
        requestAnimationFrame(animate);
    }


    return (
        <div className={styles.main} onMouseMove={(e) => {
            moveItems(e.clientX, e.clientY);
        }}>
            <motion.div variants={opacitySlideUp} initial="initial" animate="enter" className={styles.clickAnywhereSlider}>
                <div ref={slider} className={styles.sliderWrapper}>
                    <div ref={firstSlider} className={styles.slider}>
                        {
                            [0, 1, 2, 3, 4, 5].map((index) => {

                                return (
                                    <div className={styles.click} key={index}>
                                        <StarSVG width={10} height={10} color={"#fff"} />
                                        <h1>Click Anywhere</h1>
                                        {/* <StarSVG width={10} height={10} /> */}
                                    </div>
                                )

                            })
                        }

                    </div>
                    <div ref={secondSlider} className={styles.slider}>
                        {
                            [0, 1, 2, 3, 4, 5].map((index) => {

                                return (
                                    <div className={styles.click} key={index}>
                                        <StarSVG width={10} height={10} color={"#fff"} />
                                        <h1>Click Anywhere</h1>
                                        {/* <StarSVG width={10} height={10} /> */}
                                    </div>
                                )

                            })
                        }

                    </div>

                </div>
            </motion.div>
            <div className={styles.title}>

                <div style={{
                    perspective: "1000px",
                }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <motion.img variants={logoRotate} initial="initial" animate="enter" className={styles.img} src={"/assets/icons/LandingLogo.svg"} alt={'Landing Logo'} />
                </div>

            </div>

            <motion.div
                ref={cursor}
                className={styles.cursor}
                variants={scaleAnimation}
                initial="initial"
                animate="enter"
            >
                <CursorLogo />
            </motion.div>


        </div >
    )
}

export default LandingComponent