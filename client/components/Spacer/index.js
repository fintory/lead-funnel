import React from 'react';
import isArray from 'lodash/isArray';
import includes from 'lodash/includes';
import { css } from 'aphrodite/no-important';
import styles from './style';

export default function ({ size, hidden }) {
  const isHidden = prop => (isArray(hidden) ? includes(hidden, prop) : prop === hidden);

  return (
    <div
      className={css(
        styles.spacer,
        size === 'xs' && styles['spacer--xs'],
        size === 'sm' && styles['spacer--sm'],
        size === 'md' && styles['spacer--md'],
        size === 'lg' && styles['spacer--lg'],
        size === 'xl' && styles['spacer--xl'],
        isHidden('xs') && styles['hidden--xs'],
        isHidden('sm') && styles['hidden--sm'],
        isHidden('md') && styles['hidden--md'],
        isHidden('lg') && styles['hidden--lg'],
        isHidden('xl') && styles['hidden--xl'],
      )}
    />
  );
}
