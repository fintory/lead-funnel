/* eslint-disable import/no-mutable-exports */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, Transition } from 'react-transition-group';
import { css } from 'aphrodite/no-important';
import { Row, Col } from 'react-flexbox-grid';
import { registerField, unregisterField, change } from 'redux-form';

import Choice from '@components/Choice';

import tabs from './tabs';
import styles from './style';

let Tabs = class extends Component {
  constructor(props) {
    super(props);

    this.state = { title: null, tabKey: null };
  }

  componentDidMount() {
    this.props.registerField('lead', 'serviceTitle', 'Field');
    this.props.registerField('lead', 'serviceType', 'Field');
  }

  componentWillUnmount() {
    this.props.unregisterField('lead', 'serviceTitle', 'Field');
    this.props.unregisterField('lead', 'serviceType', 'Field');
  }

  onChange(title, tabKey) {
    analytics.track(`Changed to new ${tabKey}`, { to: title });

    this.props.change('lead', 'serviceTitle', title);
    this.props.change('lead', 'serviceType', tabKey);

    this.setState({ title, tabKey });
  }

  render() {
    const { currentTab, serviceTitle: title, serviceType: tabKey } = this.props;

    return (
      <div className={css(styles.tabs)}>
        <div className={css(styles.tabs__row)}>
          {tabs.map((tab, index) => (
            <span
              key={index.toString()}
              role="button"
              aria-label={tab.title}
              className={css(
                styles.tabs__tab,
                currentTab === tab.key && styles['tabs__tab--active'],
              )}
              tabIndex={-1}
              onClick={() => this.props.onChange(tab.key)}
            >
              {tab.title}
            </span>
          ))}
        </div>

        <TransitionGroup className={css(styles.tabs__contentWrapper)}>
          {tabs.map((tab, tabIndex) => (currentTab === tab.key) && (
            <Transition
              key={tabIndex.toString()}
              timeout={1000}
            >
              {state => (
                <div
                  aria-label={tab.title}
                  data-tab={tab.key}
                  className={css(
                    styles.tabs__content,
                    state === 'entered' && styles['tabs__content--entered'],
                    state === 'exited' && styles['tabs__content--exited'],
                    state === 'entering' && styles['tabs__content--entering'],
                    state === 'exiting' && styles['tabs__content--exiting'],
                  )}
                >
                  <Row>
                    {tab.choices.map((choice, index) => (
                      <Col key={index.toString()} xs={12} sm={6} md={3}>
                        <Choice
                          index={index}
                          onChange={() => this.onChange(choice.title, tab.key)}
                          isSelected={title === choice.title && tabKey === tab.key}
                          state={this.props.state}
                          tabState={state}
                          {...choice}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </Transition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
};

export default connect(null, { registerField, unregisterField, change })(Tabs);
