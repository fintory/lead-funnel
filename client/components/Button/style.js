import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  main: {
    backgroundImage: 'linear-gradient(45deg, #5395F6 0%, #63C8E4 100%)',
    color: 'white',
    textDecoration: 'none',
    fontSize: '13px',
    lineHeight: '1rem',
    padding: '.8rem 1.5rem .7rem',
    borderRadius: '3px',
    transitionDuration: '250ms',
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    '-webkit-appearance': 'none',
    transition: ['opacity 200ms linear', 'filter 200ms linear'],
    textTransform: 'uppercase',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .1)',
  },
  'main--disabled': {
    opacity: 0.7,
    cursor: 'not-allowed',
    filter: 'grayscale(100%)',
  },

  main__spinner: {
    display: 'inline-block',
    width: '100%',
    transitionDuration: '250ms',
    position: 'absolute',
    top: '-2.5rem',
    height: '2.5rem',
    left: 0,
    transform: 'translate3d(0, 0, 0)',
  },
  main__content: {
    display: 'inline-block',
    width: '100%',
    transitionDuration: '250ms',
    transform: 'translate3d(0, 0, 0)',
  },
  main__loading__active: {
    transform: 'translate3d(0, 2.5rem, 0)',
  },
});
