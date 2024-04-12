import React, { useState, useEffect } from 'react';
import { Variants, motion } from 'framer-motion';
import { itemScaleAnimation, itemShow } from '../components/Landing/anime';

const VideoComponent = ({ src, top, left }: { src: string, top: number, left: number }) => {
    const [aspectRatio, setAspectRatio] = useState(1); // Default aspect ratio

    // useEffect(() => {
    //     const video = document.createElement('video');
    //     video.onloadedmetadata = () => {
    //         // Determine the aspect ratio
    //         const ratio = video.videoWidth > video.videoHeight ? 2 / 1 : 0.889 / 1;
    //         setAspectRatio(ratio);
    //     };
    //     video.src = src;
    // }, [src]);

    return (
        <motion.div onAnimationComplete={() => {
            // setItemsArray((currentItems: any[]) =>
            //     currentItems.filter((currentItem) => currentItem.id !== item.id)
            // );
        }} variants={itemShow(left, top)} initial="initial" animate="enter" style={{
            position: 'absolute',
            aspectRatio: '1.3/1',
            width: '80%',
            height: "auto",
            pointerEvents: 'none',
            zIndex: 1000,
        }}>
            <motion.video
                variants={itemScaleAnimation}
                src={src}
                style={{ width: '100%', height: '100%', objectFit: "contain" }}
                autoPlay
                loop
                muted
            />
        </motion.div>
    );
};

export default VideoComponent;
