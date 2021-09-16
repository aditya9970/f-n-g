export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: "-100px",
  },
  visible: {
    opacity: 1,
    x: 0,
    tansition: {
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 1000,
    },
  },
  exit: {
    opacity: 0,
    x: "100px",
  },
};
export const slideInRight = {
  hidden: {
    opacity: 0,
    x: "100px",
  },
  visible: {
    opacity: 1,
    x: 0,
    tansition: {
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 1000,
    },
  },
  exit: {
    opacity: 0,
    x: "-100px",
  },
};

export const item = { hidden: { x: -10, opacity: 0 } };
