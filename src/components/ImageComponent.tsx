import React, { useState, useEffect } from 'react';
import { Variants, motion } from 'framer-motion';
import { itemScaleAnimation, itemShow } from '../components/Landing/anime';

const ImageComponent = ({ src, top, left }: { src: string, top: number, left: number }) => {
    const [aspectRatio, setAspectRatio] = useState(1); // Default aspect ratio
    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            // Determine the aspect ratio
            const ratio = image.width > image.height ? 1.3 / 1 : 0.889 / 1;
            setAspectRatio(ratio);
        };
        image.src = src;
    }, [left, src, top]);

    return (
        <motion.div
            initial="initial"
            animate="enter"
            variants={itemShow(top, left)} // Update the type of variants prop

            style={{
                aspectRatio: aspectRatio,
                width: 'auto',
                height: '80%',
                pointerEvents: 'none',
                zIndex: 1000,
                position: 'absolute',
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            < motion.img variants={itemScaleAnimation} initial="initial" animate="enter" src={src} alt="" style={{ width: '100%', height: '100%', objectFit: "contain" }} />
        </motion.div >
    );
};

export default ImageComponent;
