import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { css } from 'aphrodite/no-important';

import Button from '@components/Button';

import styles from './style';

export default function ActionBar(props) {
  return (
    <div className={css(styles.actionBar)}>
      <Grid>
        <Row between="xs">
          <Col xs={3}>
            {props.index} / 2
          </Col>
          <Col xs={9} style={{ textAlign: 'right' }}>
            <Button disabled={props.barDisabled}>
              Nächster Schritt
            </Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
