/* eslint-disable react/no-danger */

import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import Transition from 'react-transition-group/Transition';
import styles from './style';

const requireIcons = require.context('@assets/services', true, /^\.\/.*\.svg/);

export default class Choice extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: props.isSelected };

    this.onClick = this.onClick.bind(this);
  }

  onClick({ nativeEvent, currentTarget }) {
    if (document.documentElement.clientWidth > 500) {
      const { top, left } = currentTarget.getBoundingClientRect();

      const x = nativeEvent.pageX - left;
      const y = nativeEvent.pageY - top;

      this.setState(state => ({ ...state, x, y }));
    }

    this.props.onChange();
  }

  render() {
    const { isSelected: selected, tabState, state = '' } = this.props;

    return (
      <section
        tabIndex={-1}
        role="button"
        className={css(
          styles.choice,
          selected && styles['choice--selected'],
          (state === 'entering' || tabState === 'entering') && styles['choice--entering'],
          (state === 'exiting' || tabState === 'exiting') && styles['choice--exiting'],
        )}
        style={{
          animationDelay: `${this.props.index * 50}ms`,
        }}
        aria-label={this.props.title}
        onClick={this.onClick}
      >
        <Transition in={selected} timeout={1000}>
          {ownState => (
            <div
              style={{
                left: this.state.x,
                top: this.state.y,
              }}
              className={css(
                styles.choice__overlay,
                ownState === 'entering' && styles['choice__overlay--entering'],
                ownState === 'entered' && styles['choice__overlay--entered'],
                ownState === 'exiting' && styles['choice__overlay--exiting'],
                ownState === 'exited' && styles['choice__overlay--exited'],
              )}
            />
          )}
        </Transition>

        <span
          className={css(styles.choice__price, selected && styles['choice__price--selected'])}
        >
          &nbsp;{this.props.flexPrice && 'ab '}{this.props.price} €
        </span>

        <div className={css(styles.choice__content)}>

          <i
            className={css(styles.choice__icon, selected && styles['choice__icon--selected'])}
            dangerouslySetInnerHTML={{ __html: requireIcons(`./${this.props.icon}.svg`) }}
          />
          <h2
            className={css(styles.choice__title)}
            dangerouslySetInnerHTML={{ __html: this.props.title }}
          />
          <p
            className={css(styles.choice__subtitle)}
            dangerouslySetInnerHTML={{ __html: this.props.subtitle }}
          />
        </div>
      </section>
    );
  }
}
