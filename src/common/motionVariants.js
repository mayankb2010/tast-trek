export const variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    transition: {
      delay: 0.1,
      duration: 0.15,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.15,
      when: "beforeChildren",
    },
  },
};
