// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import has from 'lodash/has';

import { spinConfig as defaultSpinConfig } from '@root/config.js';
import Spin from '@components/Spin';
import styles from './style.js';

export default function Button(allProps) {
  let Tag = 'button';
  const { loading, spinConfig, styles: style, ...props } = allProps;

  if (has(props, 'to') && props.to) {
    Tag = Link;

    delete props.href;
    delete props.onClick;
  } else if (has(props, 'href') && props.href) {
    Tag = 'a';

    delete props.to;
    delete props.onClick;
  }

  return (
    <Tag
      disabled={loading}
      className={css(
        styles.main,
        loading && styles.main__loading,
        props.disabled && styles['main--disabled'],
        style === 'block' && styles['main--block'],
        style === 'transparent' && styles['main--transparent'],
      )}
      {...props}
    >
      {/* Implement the spinner for loading activity */}
      <span className={css(styles.main__spinner, loading && styles.main__loading__active)}>
        <Spin stopped={!loading} config={{ ...defaultSpinConfig, ...spinConfig }} />
      </span>

      {/* Implement the children (content) of the button */}
      <span className={css(styles.main__content, loading && styles.main__loading__active)}>
        {props.children}
      </span>
    </Tag>
  );
}

Button.defaultProps = {
  spinConfig: defaultSpinConfig,
  loading: false,
  to: null,
  href: null,
  // onClick: () =>
  //   console.warn('No `onClick`, `to` or `href` was defined. Used fallback, with a noop.'),
};

Button.propTypes = {
  to: PropTypes.string,
  loading: PropTypes.bool,
  href: PropTypes.string,
  // onClick: PropTypes.func,
  spinConfig: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
