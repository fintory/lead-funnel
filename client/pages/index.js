// @flow

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Switch } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import TransitionRoute from '@components/TransitionRoute';

import Choice from './ChoicePage';
import Information from './InformationPage';
import Phases from './PhasesPage';

import { helmetDefaults } from '../config';
import './globals.js';

function confirmExit() {
  if (!window.ignoreUnload) {
    return 'Sie haben versucht die Seite zu schließen. War das wirklich beabsichtigt?';
  }
}

const Empty = ({ children }) => children;

export default class App extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV !== 'development') {
      window.onbeforeunload = confirmExit;
    }
  }

  componentWillUnmount() {
    window.onbeforeunload = () => {};
  }

  render() {
    return [
      <Helmet key="helmet" {...helmetDefaults} />,

      <Switch key="switch">
        <TransitionGroup component={Empty} appear>
          <TransitionRoute exact path="/" component={Choice} />
          <TransitionRoute path="/ihre-informationen" component={Information} />
          <TransitionRoute path="/unsere-projekt-phasen" component={Phases} />
        </TransitionGroup>
      </Switch>,
    ];
  }
}
