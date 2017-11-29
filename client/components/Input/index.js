import React from 'react';
import Transition from 'react-transition-group/Transition';
import { css } from 'aphrodite/no-important';
import styles from './style';

export default function Input({ element: Element = 'input', type = 'text', input, meta, ...props }) {
  const publiclyInvalid = meta.touched && meta.invalid;

  return (
    <div className={css(styles.input)}>
      <Element
        type={type}
        className={css(
          styles.input__entity,
          Element === 'textarea' && styles['input__entity--textarea'],
          type === 'checkbox' && styles['input__entity--checkbox'],
          props.disabled && styles['input__entity--disabled'],
          publiclyInvalid && styles['input__entity--invalid'],
        )}
        {...props}
        {...input}
      />

      <Transition
        in={publiclyInvalid}
        timeout={500}
      >
        {state => (
          <i
            className={css(
              styles.input__error,
              state === 'exited' && styles['input__error--exited'],
              state === 'entered' && styles['input__error--entered'],
              state === 'exiting' && styles['input__error--exiting'],
              state === 'entering' && styles['input__error--entering'],
            )}
          >
            {meta.error}
          </i>
        )}
      </Transition>

      {type === 'checkbox' && [
        <span key={1} className={css(styles.input__checkboxLine)} />,
        <span key={2} className={css(styles.input__checkboxLine)} />,
      ]}
    </div>
  );
}

export function Label({ htmlFor, children }) {
  return (
    <label
      className={css(styles.input__label)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
