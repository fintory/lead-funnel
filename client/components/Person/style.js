/* eslint-disable global-require */

import { StyleSheet } from 'aphrodite/no-important';
import { mobile, retina, retina3x } from '@utils/queries';

export default StyleSheet.create({
  person: {
    ...mobile({
      position: 'fixed',
      bottom: 150,
      boxShadow: 'none',
      left: 24,
      right: 24,
      opacity: 0,
      pointerEvents: 'none',
      transition: 'all 250ms ease-in',
      transform: 'scale(0.8)',
      transformOrigin: '100% 100%',
    }),
  },

  'person--active': {
    ...mobile({
      opacity: 1,
      pointerEvents: 'initial',
      transform: 'scale(1)',
    }),
  },

  person__overlay: {
    ...mobile({
      '-webkit-tap-highlight-color': 'transparent',
      position: 'fixed',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      transition: 'all 250ms ease-in',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.2)',
      opacity: 0,
    }),
  },

  'person__overlay--active': {
    pointerEvents: 'initial !important',
    opacity: '1 !important',
  },

  person__bubble: {
    cursor: 'pointer',
    '-webkit-tap-highlight-color': 'transparent',
    outline: 'none',
    position: 'fixed',
    bottom: 90,
    background: 'linear-gradient(135deg, #5395F6 0%, #63C8E4 100%)',
    borderRadius: '50%',
    lineHeight: '38px',
    boxShadow: '0 0 10px rgba(0,0,0,.1)',
    paddingLeft: 2,
    boxSizing: 'border-box',
    textAlign: 'center',
    right: 30,
    width: 42,
    height: 42,
    color: 'white',
    fontSize: 28,
    display: 'none',

    ...mobile({
      display: 'block',
    }),
  },

  person__flex: {
    display: 'flex',
    alignItems: 'center',
    margin: '15px 0',

    ...mobile({
      marginTop: 0,
    }),
  },

  person__avatar: {
    flex: '0 0 70px',
    marginRight: 20,
    width: 70,
    height: 70,
    backgroundSize: '70px 70px',
    backgroundImage: `url(${require('@assets/img-chris.png')})`,

    ...retina({
      backgroundImage: `url(${require('@assets/img-chris@2x.png')})`,
    }),

    ...retina3x({
      backgroundImage: `url(${require('@assets/img-chris@3x.png')})`,
    }),

    ...mobile({
      width: 60,
      height: 60,
      flexBasis: 60,
      backgroundSize: '60px 60px',
    }),
  },

  person__table: {
    width: '100%',
  },

  person__tr: {
  },

  person__td: {
    ':last-child': {
      textAlign: 'right',
    },
  },
});
