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
