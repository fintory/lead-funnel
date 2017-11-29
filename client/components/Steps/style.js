
import { StyleSheet } from 'aphrodite/no-important';
import { mobile } from '@utils/queries';

export default StyleSheet.create({
  steps: {
    marginTop: 40,
  },

  steps__header: {
    opacity: 0.4,
    fontSize: 12,
    textTransform: 'uppercase',
  },

  steps__item: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '15px 0',

    ':first-of-type': {
      marginTop: 0,
    },
  },

  steps__itemHeader: {
    flex: '0 0 40px',
    fontSize: 36,
    paddingTop: 20,
    marginRight: 20,
    textAlign: 'center',

    ...mobile({
      flexBasis: 20,
      fontSize: 24,
    }),
  },

  steps__itemMain: {
    flex: '1',
  },

  steps__itemHeading: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 10,

    ...mobile({
      fontSize: 16,
    }),
  },

  steps__itemSubheading: {
    opacity: 0.5,
    fontSize: 14,

    ...mobile({
      fontSize: 13,
    }),
  },
});
