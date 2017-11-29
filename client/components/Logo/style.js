/* eslint-disable global-require */

import { StyleSheet } from 'aphrodite/no-important';
import { retina, retina3x } from '@utils/queries';

export default StyleSheet.create({
  logo: {
    display: 'block',
    width: 111,
    height: 25,
    backgroundImage: `url(${require('@assets/logo.png')})`,
    backgroundSize: '111px 25px',

    ...retina({
      backgroundImage: `url(${require('@assets/logo@2x.png')})`,
    }),

    ...retina3x({
      backgroundImage: `url(${require('@assets/logo@3x.png')})`,
    }),
  },

  'logo--right': {
    float: 'right',
  },
});
