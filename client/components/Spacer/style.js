import { StyleSheet } from 'aphrodite/no-important';
import { mobile, styleSheetQueries } from '@utils/queries';

function generateHiddenFor(prop) {
  const query = styleSheetQueries[prop];

  if (!query) return {};

  return {
    [`hidden--${prop}`]: {
      [`@media (min-width: ${query.min}px) and (max-width: ${query.max}px)`]: {
        visibility: 'hidden',
        display: 'none',
      },
    },
  };
}

export default StyleSheet.create({
  spacer: {
    display: 'block',
    width: '100%',
    height: 16,

    ...mobile({
      height: 12,
    }),
  },

  'spacer--xs': {},
  'spacer--sm': {},
  'spacer--md': {},
  'spacer--lg': {},
  'spacer--xl': {},

  ...generateHiddenFor('xs'),
  ...generateHiddenFor('sm'),
  ...generateHiddenFor('md'),
  ...generateHiddenFor('lg'),
  ...generateHiddenFor('xl'),
});
