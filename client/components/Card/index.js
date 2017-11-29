
import React from 'react';
import { css } from 'aphrodite/no-important';

import styles from './style';

export default function Card({
  children,
  big,
  interactive,
  animated,
  state,
  additionalClassName,
  additionalClassNames = [],
  small,
  ...props
}) {
  return (
    <section
      className={css(
        styles.card,
        small && styles['card--small'],
        big && styles['card--big'],
        interactive && styles['card--interactive'],

        (animated && state === 'entered') && styles['card--entered'],
        (animated && state === 'entering') && styles['card--entering'],
        (animated && state === 'exited') && styles['card--exited'],
        (animated && state === 'exiting') && styles['card--exiting'],

        additionalClassName,
        ...additionalClassNames,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function Footer({ children }) {
  return (
    <footer className={css(styles.card__footer)}>{children}</footer>
  );
}
