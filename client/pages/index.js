// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Switch } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import TransitionRoute from '@components/TransitionRoute';

import Choice from './ChoicePage';
import Information from './InformationPage';
import Final from './FinalPage';

import { helmetDefaults } from '../config';
import './globals.js';

const Empty = ({ children }) => children;

export default function App() {
  return [
    <Helmet key="helmet" {...helmetDefaults} />,

    <Switch key="switch">
      <TransitionGroup component={Empty} appear>
        <TransitionRoute exact path="/" component={Choice} />
        <TransitionRoute path="/information" component={Information} />
        <TransitionRoute path="/confirmation" component={Final} />
      </TransitionGroup>
    </Switch>,
  ];
}
