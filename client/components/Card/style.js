
import { StyleSheet } from 'aphrodite/no-important';
import { mobile } from '@utils/queries';

export default StyleSheet.create({
  card: {
    boxShadow: '0 22px 50px rgba(0, 0, 0, .05)',
    backgroundColor: 'white',
    padding: '2rem 1.5rem 1.5rem',
    borderRadius: 4,

    ...mobile({
      padding: '1.5rem',
    }),
  },

  'card--small': {
    padding: '1rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, .05)',

    ':hover': {
      position: 'relative',
      zIndex: 5,
      boxShadow: '0 20px 40px rgba(0, 0, 0, .05)',
    },
  },

  'card--big': {
    padding: '3rem',

    ...mobile({
      padding: '2rem',
    }),
  },

  card__footer: {
    margin: '2rem -1.5rem -1.5rem',
    padding: '1rem 1.5rem',
    background: 'rgba(248, 248, 248, 1)',
  },
});
