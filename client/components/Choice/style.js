
import { StyleSheet } from 'aphrodite/no-important';
import { mobile } from '@utils/queries';
import { zoomIn, zoomOut, zoomInFull, fadeOut } from '@utils/keyframes';

export default StyleSheet.create({
  choice: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    outline: 'none',
    textAlign: 'center',
    position: 'relative',
    padding: 25,
    transition: 'all 150ms ease-in',
    userSelect: 'none',
    cursor: 'pointer',
    margin: '16px 0',
    '-webkit-tap-highlight-color': 'transparent',

    ...mobile({
      padding: 15,
    }),
  },

  'choice--selected': {
    color: 'white',
    boxShadow: '0 4px 10px rgba(0,0,0,.06)',
  },

  'choice--entering': {
    animationName: [zoomIn],
    animationDuration: '500ms',
    animationFillMode: 'both',
  },

  'choice--exiting': {
    animationName: [zoomOut],
    animationDuration: '500ms',
    animationFillMode: 'both',
  },

  choice__content: {
    position: 'relative',
    zIndex: 1,
  },

  choice__icon: {
    display: 'block',
    margin: '0 auto',
    width: 72,
    height: 72,
    color: '#d5dae2',

    ...mobile({
      width: 36,
      height: 36,
    }),
  },

  'choice__icon--selected': {
    color: 'white',
  },

  choice__price: {
    position: 'absolute',
    top: 10,
    right: 0,
    border: '2px solid #D8D8D8',
    borderRight: 0,
    borderRadius: '4px 0 0 4px',
    padding: 4,
    fontSize: 14,
    lineHeight: '14px',
    transition: 'all 250ms ease-in',
    transform: 'translateX(20px)',
    opacity: 0,

    ':hover .choice__price': {
      transform: 'translateX(0)',
      opacity: 1,
    },
  },

  'choice__price--selected': {
    color: 'white',
    backgroundColor: '#5396f6',
    borderColor: '#5396f6',
  },

  choice__title: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 0,

    ...mobile({
      fontSize: 16,
    }),
  },

  choice__subtitle: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: '20px',
    opacity: 0.5,
    marginBottom: 0,

    ...mobile({
      fontSize: 13,
    }),
  },

  choice__overlay: {
    width: 800,
    height: 800,
    borderRadius: '50%',
    backgroundColor: '#5396f6',
    // backgroundImage: 'linear-gradient(45deg, #5395F6 0%, #63C8E4 100%)',
    position: 'absolute',
    top: '50%',
    pointerEvents: 'none',
    left: '50%',
    marginLeft: -400,
    marginTop: -400,
    zIndex: 0,
    // transition: 'all 500ms ease-out',
    transformOrigin: '50% 50%',

    animationDuration: '300ms',
    animationFillMode: 'both',
  },

  'choice__overlay--entered': {
    opacity: 1,
    transform: 'scale(1)',
  },

  'choice__overlay--entering': {
    animationName: [zoomInFull],
  },

  'choice__overlay--exited': {
    opacity: 0,
    transform: 'scale(.15)',
  },

  'choice__overlay--exiting': {
    animationName: [fadeOut],
  },
});
