
import { StyleSheet } from 'aphrodite/no-important';
import { mobile } from '@utils/queries';

export default StyleSheet.create({
  actionBar: {
    position: 'fixed',
    zIndex: 5,
    bottom: 0,
    left: 0,
    width: '100%',
    height: 82,
    boxSizing: 'border-box',
    lineHeight: '42px',
    padding: '20px 30px',
    backgroundColor: 'white',
    borderTop: '1px solid #e6e6e6',

    ...mobile({
      height: 72,
      padding: '15px 16px',
    }),

    '@media (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3) and (orientation: landscape)': {
      height: 72,
      padding: '15px 50px',
    },
  },
});
