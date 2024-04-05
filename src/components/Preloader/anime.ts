export const slideRight = {
  initial: {
    x: "-100%",
  },
  enter: {
    x: ["-100%", "0%", "100%"],
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const svgAnim = (index: number) => {
  return {
    initial: {
      width: 0,
      height: 0,
      // opacity: 0,
    },
    enter: {
      width: [0, 9000],
      height: [0, 9000],
      // opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: index * 0.25,
      },
    },
  };
};
