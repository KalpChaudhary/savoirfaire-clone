import { easeIn, easeInOut } from "framer-motion";

export const slideUp = (i: number) => {
  return {
    initial: {
      y: "100%",
    },
    enter: {
      y: ["100%", "0%"],
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: 4 + i * 0.15,
      },
    },
  };
};

export const logoRotate = {
  initial: {
    rotateY: 75,
    scale: 0.5,
    opacity: 0,
  },
  enter: {
    rotateY: [75, 0],
    scale: [0.5, 1],
    opacity: [0, 1],

    transition: {
      duration: 0.8,
      delay: 3.9,
    },
  },
};

export const opacitySlideUp = {
  initial: {
    opacity: 0,
    y: 50,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: 4,
    },
  },
};

// reduce opacity when element is almost at the top of the screen

export const itemShow = (left: any, top: any) => {
  return {
    initial: {
      opacity: 0,
      left: left,
      top: top,
      rotate: 0,
    },
    enter: {
      opacity: [0, 1, 0.5, 0],
      // left: left,
      top: "-40%",
      // set rotate -15 or 15 alternatively
      rotate: Math.random() > 0.5 ? 10 : -10,
      transition: {
        duration: 6,
      },
    },
  };
};

export const scaleAnimation = {
  initial: { scale: 0, opacity: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    opacity: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: easeInOut, delay: 4 },
  },
};

export const itemScaleAnimation = {
  initial: {
    scale: 0.5,
  },

  enter: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
