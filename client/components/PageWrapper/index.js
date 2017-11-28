
import React from 'react';
import { css } from 'aphrodite/no-important';
import { Grid } from 'react-flexbox-grid';

import Logo from '@components/Logo';
import ActionBar from '@components/ActionBar';

import styles from './style';

export default function PageWrapper({ element: Element = 'div', barDisabled, ...props }) {
  return (
    <Element
      onSubmit={props.handleSubmit}
      className={css(
        styles.main,
        props.state === 'entered' && styles['main--entered'],
        props.state === 'entering' && styles['main--entering'],
        props.state === 'exiting' && styles['main--exiting'],
        props.state === 'exited' && styles['main--exited'],
      )}
      {...props}
    >
      <Grid>
        <Logo additionalClassName={styles.main__logo} />
        {props.children}
      </Grid>

      <ActionBar
        index={props.index}
        barDisabled={barDisabled}
      />
    </Element>
  );
}
