import React from 'react';
import CountUp from 'react-countup';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CounterCard.module.scss';

interface Props {
  icon: IconProp;
  counter: number;
  description: string;
  withAnimation?: boolean;
}

export default function LandingStats({
  icon,
  counter,
  description,
  withAnimation = true,
}: Props) {
  return (
    <CountUp start={0} end={counter} delay={0}>
      {({ countUpRef }) => (
        <div className={`${styles['counter-card']} text-center`}>
          <div
            className={`${styles['icon-box']} d-flex justify-content-center align-items-center`}
          >
            <FontAwesomeIcon width="30" height="30" color="#fff" icon={icon} />
          </div>
          <div className={styles['counter-details']}>
            <p ref={withAnimation && countUpRef}>{counter}</p>
            <h3>{description}</h3>
          </div>
        </div>
      )}
    </CountUp>
  );
}
