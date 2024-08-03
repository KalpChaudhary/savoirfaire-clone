"use client"
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, } from 'framer-motion'
import styles from './Landing.module.scss'
import { itemScaleAnimation, itemShow, logoRotate, opacitySlideUp, scaleAnimation } from './anime'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CursorLogo from '../../../public/assets/icons/CursorLogo'
import StarSVG from '../../../public/assets/icons/StarSVG'
import { useGSAP } from "@gsap/react";
import ImageComponent from '../ImageComponent'
import VideoComponent from '../VideoComponent'


const preloadImages = async () => {
    const frameCount = 11;
    const baseUrl = "/assets/images/"; // Replace with the actual base URL
    const loadSingleImage = (index: number) =>
        new Promise((resolve) => {
            const img = new Image();
            img.src = `${baseUrl}img-${(index + 1).toString().padStart(2, "")}.webp`;
            img.onload = () => resolve(img);
        });
    await Promise.all(Array.from({ length: frameCount }, (_, i) => loadSingleImage(i)));
    return true;
};



function LandingComponent() {
    const cursor = useRef(null);
    const title = useRef(null);


    var data = require('../../data.json');
    const categories = data.items.filter((item: any) => item.category == "serif");
    // console.log(categories)
    const listOfSerifNames = categories.map((item: any) => item.family);
    console.log(listOfSerifNames)

    let xMoveCursor = useRef(null);
    let yMoveCursor = useRef(null);

    const slider = useRef(null);
    const firstSlider = useRef(null);
    const secondSlider = useRef(null);

    // Define a ref to keep track of the baseSpeed
    const baseSpeedRef = useRef(0.05);

    const [itemsArray, setItemsArray] = useState([] as any);
    const [imageIndex, setImageIndex] = useState(1);
    const [videoIndex, setVideoIndex] = useState(1);
    const [imageLoaded, setImageLoaded] = useState(false);



    useLayoutEffect(() => {
        preloadImages()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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


    // const handleClick = (e: any) => {
    //     const itemType = Math.random() > 0.5 ? "image" : "video";
    //     let itemSrc, newItem: { id?: number; type?: string; src?: string; left?: any; top?: any };
    //     if (itemType === "image") {
    //         itemSrc = `/assets/images/img-${(imageIndex + 1) % 12}.avif`; // Assuming 12 images
    //         setImageIndex(prevIndex => (prevIndex + 1) % 12);
    //     } else {
    //         itemSrc = `/assets/videos/video-${(videoIndex + 1) % 7}.webm`; // Assuming 7 videos
    //         setVideoIndex(prevIndex => (prevIndex + 1) % 7);
    //     }

    //     newItem = { id: Date.now(), type: itemType, src: itemSrc, left: e.clientX - 350, top: e.clientY - 150 }; // Ensure each item has a unique id

    //     setItemsArray((itemsArray: any) => [...itemsArray, newItem]);
    //     console.log(itemsArray)
    // };





    useLayoutEffect(() => {
        const handleClick = (e: any) => {

            //play sound on click
            const audio = new Audio('/assets/click.mp3');
            audio.play();

            //scale cursor to 0.8 while on tap and reset to 1 after 0.1s
            gsap.to(cursor.current, { scale: 0.7, duration: 0.2, ease: "power3", onComplete: () => { gsap.to(cursor.current, { scale: 1, duration: 0.2, ease: "power3" }) } });




            let itemSrc, newItem: { id?: number; type?: string; src?: string; left?: any; top?: any };

            if (imageIndex == 0) {
                console.log("imageIndex", imageIndex)
                setImageIndex(prev => prev + 1);
            }
            itemSrc = `/assets/images/img-${(imageIndex == 0 ? 1 : imageIndex) % 12}.webp`; // Assuming 12 images
            setImageIndex(prevIndex => (prevIndex + 1) % 12);

            newItem = { id: Date.now(), type: "image", src: itemSrc, left: e.clientX - window.innerWidth * 0.35, top: e.clientY - window.innerHeight * 0.1 }; // Ensure each item has a unique id

            setItemsArray((itemsArray: any) => [...itemsArray, newItem]);
        };
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [itemsArray, imageIndex, videoIndex]);

    //cursor movement
    const moveItems = (x: number, y: number) => {
        //@ts-ignore
        xMoveCursor.current(x);
        //@ts-ignore
        yMoveCursor.current(y);

    };

    useEffect(() => {
        const handleWheel = (event: any) => {
            const scale = 0.05;
            // Calculate speed adjustment based on deltaY
            let speedAdjustment = (event.deltaY) * scale;
            // Update the baseSpeed stored in the ref
            baseSpeedRef.current = speedAdjustment;
            baseSpeedRef.current = Math.max(Math.min(baseSpeedRef.current, 1), -1);
        };
        // Add event listener
        window.addEventListener('wheel', handleWheel);
        // Remove event listener on cleanup
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    //slider movement
    useGSAP(() => {
        // gsap code here...
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(slider.current, {

            x: "-500px"
        })
        requestAnimationFrame(animate);
    }); // <-- scope is for selector text (optional)

    //slider movement
    const animate = () => {
        // Access the current speed from the ref
        const currentSpeed = baseSpeedRef.current;
        // console.log(currentSpeed)

        if (!firstSlider.current || !secondSlider.current) return;

        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstSlider.current, { xPercent: xPercent })
        gsap.set(secondSlider.current, { xPercent: xPercent })
        xPercent += currentSpeed * direction;
        requestAnimationFrame(animate);
    }


    return (
        <div className={styles.main} onMouseMove={(e) => {
            moveItems(e.clientX, e.clientY);
        }}>
            {/* "ClickAnywhere" slider structure */}
            <motion.div variants={opacitySlideUp} initial="initial" animate="enter" className={styles.clickAnywhereSlider}>
                <div ref={slider} className={styles.sliderWrapper}>
                    <div ref={firstSlider} className={styles.slider}>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {

                                return (
                                    <div className={styles.click} key={index}>
                                        <StarSVG width={10} height={10} color={"#fff"} />
                                        <h1>Click Anywhere</h1>
                                    </div>
                                )

                            })
                        }

                    </div>
                    <div ref={secondSlider} className={styles.slider}>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                                return (
                                    <div className={styles.click} key={index}>
                                        <StarSVG width={10} height={10} color={"#fff"} />
                                        <h1>Click Anywhere</h1>
                                    </div>
                                )

                            })
                        }

                    </div>

                </div>
            </motion.div>

            {/* Name Title code */}
            <div className={styles.title}>
                <div style={{
                    perspective: "1000px",
                }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <motion.img ref={title} variants={logoRotate} initial="initial" animate="enter" className={styles.img} src={"/assets/icons/LandingLogo.svg"} alt={'Landing Logo'} />
                </div>
            </div>
            {/* Image and Video elements */}
            {/* Elemetns are dynamically added in video image container and will be removed from it after 4s of animation for performance */}
            <div className={styles.imageVideoContainer}>
                {
                    itemsArray.map((item: any, index: React.Key | null | undefined) => {
                        if (item.type === "image") {
                            return (
                                <ImageComponent top={item.top} left={item.left} src={item.src} key={index} />
                            );
                        } else {
                            return (
                                <VideoComponent top={item.top} left={item.left} src={item.src} key={index} />
                            );
                        }
                    })
                }
            </div>



            {/* Cursor code */}
            <motion.div
                ref={cursor}
                className={styles.cursor}
                variants={scaleAnimation}
                initial="initial"
                animate="enter"


            >
                <CursorLogo width={"100%"} height={"100%"} />
            </motion.div>


        </div >
    )
}

export default LandingComponent