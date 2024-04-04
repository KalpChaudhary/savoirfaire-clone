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
