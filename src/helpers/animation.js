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

export const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const highlight = {
  scale: 1.01,
  translateX: -1,
  translateY: -1,
};

export const click = {
  scale: 0.9,
};

export const alertAnimation = {
  hidden: {
    opacity: 0,
    translateX: "-50%",
    rotateX: -100,
    transformOrigin: "top",
  },
  visible: {
    opacity: 1,
    tansition: {
      duration: 1,
    },
    translateX: "-50%",
    rotateX: 0,
    transformOrigin: "top",
  },
  exit: {
    opacity: 0,
    translateX: "-50%",
    rotateX: -100,
    transformOrigin: "top",
  },
};

export const SlideInBack = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    tansition: {
      type: "tween",
      duration: 0.3,
      ease: [0.55, 0.085, 0.68, 0.53],
    },
  },
  exit: {
    opacity: 0,
  },
};
