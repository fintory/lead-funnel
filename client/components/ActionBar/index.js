import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Media from 'react-media';
import { css } from 'aphrodite/no-important';

import Button from '@components/Button';
import { mobile } from '@utils/queries';

import styles from './style';

export default function ActionBar(props) {
  return (
    <div className={css(styles.actionBar)}>
      <Grid>
        <Row between="xs">
          <Media query={mobile.raw}>
            {matches => (matches || (
              <Col xs={3}>
                Schritt {props.index ? `${props.index} / 3` : ''}
              </Col>
            ))}
          </Media>
          <Col xs style={{ textAlign: 'right' }}>
            {props.index !== 1 && (
              <Button styles="transparent">←</Button>
            )}
            <Button disabled={props.barDisabled}>
              {props.index === 3 ? 'Unverbindlich anfragen' : 'Nächster Schritt'}
            </Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
