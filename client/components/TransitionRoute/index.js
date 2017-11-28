/* eslint-disable react/no-children-prop */

import React from 'react';
import { reduxForm } from 'redux-form';
import { Transition } from 'react-transition-group';
import { Route } from 'react-router-dom';

import submitByRoute from '@utils/submitByRoute';
import nextStepByRoute from '@utils/nextStepByRoute';
import validateByRoute from '@utils/validateByRoute';

export default function TransitionRoute({ component, ...routeProps }) {
  const Component = reduxForm({
    form: 'lead',
    destroyOnUnmount: false,
    validate: validateByRoute[routeProps.path],
  })(component);

  return (
    <Route
      {...routeProps}
      children={props => (
        <Transition
          in={!!props.match}
          appear
          mountOnEnter
          unmountOnExit
          timeout={2000}
        >
          {state => (
            <Component
              state={state}
              onSubmit={async (fields) => {
                try {
                  await submitByRoute[routeProps.path](fields);
                  props.history.push(nextStepByRoute[routeProps.path]);
                } catch (e) {
                  console.warn(e);
                }
              }}
              {...props}
            />
          )}
        </Transition>
      )}
    />
  );
}
