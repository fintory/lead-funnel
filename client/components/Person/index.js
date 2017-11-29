
import React, { Component } from 'react';
import Media from 'react-media';
import autobind from 'autobind-decorator';
import { css } from 'aphrodite/no-important';

import Card from '@components/Card';
import Spacer from '@components/Spacer';
import { mobile } from '@utils/queries';

import styles from './style';

function ignoreUnload(method) {
  analytics.track(`Tried to contact via ${method}`);
  window.ignoreUnload = true;
  setTimeout(() => { window.ignoreUnload = false; }, 500);
}

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = { shown: false };
  }

  @autobind
  onClick() {
    this.setState((state) => {
      if (!state.shown) {
        // TODO: Disable scroll
      } else {
        // TODO: Enable scroll
      }

      return { ...state, shown: !state.shown };
    });
  }

  @autobind
  hideOverlay(event) {
    const currentClass = event.target.getAttribute('class');
    const expectedClass = css(
      styles.person__overlay,
      this.state.shown && styles['person__overlay--active'],
    );

    if (currentClass === expectedClass) {
      this.setState({ shown: false });
      // TODO: Disable scroll
    }
  }

  render() {
    return (
      <div
        className={css(styles.person__wrapper)}
      >
        <div
          role="button"
          tabIndex={-1}
          className={css(
            styles.person__overlay,
            this.state.shown && styles['person__overlay--active'],
          )}
          onClick={this.hideOverlay}
        />
        <div
          role="button"
          tabIndex={-1}
          className={css(styles.person__bubble)}
          onClick={this.onClick}
        >
          ?
        </div>

        <Card
          additionalClassNames={[styles.person, this.state.shown && styles['person--active']]}
          {...this.props}
        >
          <Media query={mobile.raw}>
            {matches => (matches || (
              <h3>Sie haben Fragen?</h3>
            ))}
          </Media>

          <Spacer size="xs" hidden="xs" />

          <div className={css(styles.person__flex)}>
            <div className={css(styles.person__avatar)} />

            <div>
              <h3>Chris Krüger</h3>
              <p>Projektmanagement</p>
            </div>
          </div>

          <Spacer />

          <table className={css(styles.person__table)}>
            <tbody>
              <tr className={css(styles.person__tr)}>
                <td className={css(styles.person__td)}>Telefon</td>
                <td className={css(styles.person__td)}>
                  <a onClick={() => ignoreUnload('phone')} href="tel:+491749964123">+49 174 9964123</a>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <hr />
                </td>
              </tr>
              <tr className={css(styles.person__tr)}>
                <td className={css(styles.person__td)}>E-Mail</td>
                <td className={css(styles.person__td)}>
                  <a onClick={() => ignoreUnload('mail')} href="mailto:chris@fintory.com">chris@fintory.com</a>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}
