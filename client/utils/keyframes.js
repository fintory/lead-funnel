
export const fadeIn = {
  from: {
    opacity: 0,
  },

  to: {
    opacity: 1,
  },
};

export const fadeOut = {
  from: {
    opacity: 1,
  },

  to: {
    opacity: 0,
  },
};

export const zoomIn = {
  from: {
    transform: 'scale(.75)',
    opacity: 0,
  },

  to: {
    transform: 'scale(1)',
    opacity: 1,
  },
};

export const zoomOut = {
  from: {
    transform: 'scale(1)',
    opacity: 1,
  },

  to: {
    transform: 'scale(.75)',
    opacity: 0,
  },
};

export const zoomInFull = {
  from: {
    transform: 'scale(0)',
    opacity: 0,
  },

  to: {
    transform: 'scale(1)',
    opacity: 1,
  },
};

export const zoomOutFull = {
  from: {
    transform: 'scale(1)',
    opacity: 1,
  },

  to: {
    transform: 'scale(0)',
    opacity: 0,
  },
};
