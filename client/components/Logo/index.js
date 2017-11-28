
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';
import styles from './style';

export default function Logo({ additionalClassName, ...props }) {
  return (
    <Link
      to="/"
      className={css(styles.logo, additionalClassName)}
      {...props}
    />
  );
}
