import { StyleSheet } from 'aphrodite/no-important';
import { fadeIn, fadeOut } from '@utils/keyframes';

export default StyleSheet.create({
  main: {
    paddingTop: 40,
    paddingBottom: 40,
    animationFillMode: 'both',
  },

  'main--entered': {
    opacity: 1,
  },

  'main--entering': {
    animationName: [fadeIn],
    animationDelay: '1000ms',
    animationDuration: '1000ms',
  },

  'main--exiting': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    animationName: [fadeOut],
    animationDuration: '1000ms',
  },

  'main--exited': {
    opacity: 0,
  },

  main__logo: {
    marginBottom: 60,

    '@media (max-width: 500px)': {
      marginBottom: 30,
    },
  },
});
