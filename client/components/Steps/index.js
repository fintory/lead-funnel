
import React from 'react';
import { css } from 'aphrodite/no-important';

import styles from './style';

export default function Steps({ steps = [] }) {
  return (
    <section className={css(styles.steps)}>
      <header className={css(styles.steps__header)}>Projektschritte</header>

      {steps.map((step, index) => (
        <section key={index.toString()} className={css(styles.steps__item)}>
          <header className={css(styles.steps__itemHeader)}>{index + 1}</header>
          <main className={css(styles.steps__itemMain)}>
            <h2 className={css(styles.steps__itemHeading)}>
              {step.title}
            </h2>
            <p className={css(styles.steps__itemSubheading)}>
              {step.subtitle}
            </p>
          </main>
        </section>
      ))}
    </section>
  );
}
