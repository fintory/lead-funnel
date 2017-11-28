
import { StyleSheet } from 'aphrodite/no-important';
import { fadeIn, fadeOut } from '@utils/keyframes';

export default StyleSheet.create({
  tabs: {},

  tabs__row: {
    borderBottom: '1px solid #d8d8d8',
    marginBottom: 20,
  },

  tabs__tab: {
    lineHeight: '54px',
    outline: 'none',
    padding: '0 20px',
    marginBottom: -1,
    transition: 'all 250ms linear',
    display: 'inline-block',
    borderBottom: '1px solid transparent',
    cursor: 'pointer',
    '-webkit-tap-highlight-color': 'transparent',

    ':hover': {
      borderBottomColor: '#5396f6',
    },
  },

  'tabs__tab--active': {
    borderBottomColor: '#5396f6',
  },

  tabs__contentWrapper: {
    position: 'relative',
  },

  tabs__content: {
    opacity: 1,

    animationFillMode: 'both',
    animationDuration: '500ms',
  },

  'tabs__content--entering': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',

    animationName: [fadeIn],
    animationDelay: '500ms',
  },

  'tabs__content--exiting': {
    animationName: [fadeOut],
  },
});
