import React, { useState, useEffect, useRef } from 'react';
import { Variants, motion } from 'framer-motion';
import { itemScaleAnimation, itemShow } from '../components/Landing/anime';
import styles from './ImageComponent.module.scss';
const ImageComponent = ({ src, top, left }: { src: string, top: number, left: number }) => {
    // const [aspectRatio, setAspectRatio] = useState(1); // Default aspect ratio
    const ref = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     const image = new Image();
    //     image.onload = () => {
    //     ]
    //     };
    //     image.src = src;
    // }, [left, src, top]);
    useEffect(() => {
        //@ts-ignore
        ref.current.style.left = `${left}`;
        //@ts-ignore
        ref.current.style.top = `${top}`;
    }, [left, top]);

    return (
        <motion.div

            initial="initial"
            ref={ref}
            animate="enter"
            variants={itemShow(top, left)} // Update the type of variants prop
            className={styles.image_wrapper}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            < motion.img className={styles.img} variants={itemScaleAnimation} initial="initial" animate="enter" src={src} alt="img" />
        </motion.div >
    );
};

export default ImageComponent;

