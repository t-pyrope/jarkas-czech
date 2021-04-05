export const navAnimation = {
  hidden: {
    backgroundColor: '#42614d',
  },
  show: {
    backgroundColor: '#3b5845',
  },
};

export const btnAnimation = {
  hidden: { scale: 1 },
  tap: {
    scale: 0.95,
  },
};

export const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'anticipate',
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
      ease: 'anticipate',
    },
  },
};

export const listAnimation = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const listItemAnimation = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};
