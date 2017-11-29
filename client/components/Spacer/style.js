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

  'spacer--xs': {
    height: 8,

    ...mobile({
      height: 6,
    }),
  },

  'spacer--sm': {
    height: 24,

    ...mobile({
      height: 20,
    }),
  },

  'spacer--md': {
    height: 32,

    ...mobile({
      height: 28,
    }),
  },

  'spacer--lg': {
    height: 40,

    ...mobile({
      height: 32,
    }),
  },

  'spacer--xl': {
    height: 48,

    ...mobile({
      height: 36,
    }),
  },

  ...generateHiddenFor('xs'),
  ...generateHiddenFor('sm'),
  ...generateHiddenFor('md'),
  ...generateHiddenFor('lg'),
  ...generateHiddenFor('xl'),
});
