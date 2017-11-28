
import { StyleSheet } from 'aphrodite/no-important';
import { mobile } from '@utils/queries';
import { zoomIn, zoomOut } from '@utils/keyframes';

export default StyleSheet.create({
  input: {
    margin: '0',
    position: 'relative',
  },

  input__label: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    userSelect: 'none',
    '-webkit-tap-highlight-color': 'transparent',
  },

  input__entity: {
    background: 'white',
    borderRadius: 5,
    boxSizing: 'border-box',
    padding: '12px 20px',
    margin: 0,
    boxShadow: '0 4px 10px rgba(0,0,0,.06)',
    fontFamily: 'inherit',
    '-webkit-appearance': 'none',
    appearance: 'none',
    border: 0,
    outline: 'none',
    fontSize: 18,
    width: '100%',
    transition: 'all 200ms linear',
    resize: 'none',
    '-webkit-tap-highlight-color': 'transparent',

    ':focus': {
      boxShadow: '0 6px 14px rgba(40, 44, 71, 0.1)',
    },

    ...mobile({
      fontSize: 14,
      padding: '10px 15px',
    }),
  },

  'input__entity--checkbox': {
    float: 'left',
    padding: 0,

    width: 30,
    height: 30,

    ':checked': {
      background: 'rgba(82, 149, 246, 1)',
    },
  },

  input__error: {
    // color: 'red',
    fontStyle: 'normal',
    lineHeight: '20px',
    fontSize: 11,
    position: 'absolute',
    top: '50%',
    marginTop: '-12px',
    right: 10,
    padding: '0 10px',
    borderRadius: 4,
  },

  'input__error--entered': {
    opacity: 1,
  },

  'input__error--entering': {
    animationName: [zoomIn],
    animationDuration: '200ms',
  },

  'input__error--exiting': {
    animationName: [zoomOut],
    animationDuration: '200ms',
  },

  'input__error--exited': {
    opacity: 0,
  },

  input__checkboxLine: {
    width: 2,
    height: 8,
    display: 'block',
    position: 'absolute',
    background: 'white',
    top: '50%',
    left: '50%',

    ':first-of-type': {
      marginTop: -2,
      marginLeft: -5,
      transform: 'rotate(-45deg)',
    },

    ':last-of-type': {
      marginTop: -7,
      marginLeft: 2,
      height: 14,
      transform: 'rotate(45deg)',
    },
  },

  'input__entity--textarea': {
    height: 120,
  },
});
