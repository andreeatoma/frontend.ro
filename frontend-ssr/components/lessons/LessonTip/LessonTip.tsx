import React, { PropsWithChildren } from 'react';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './LessonTip.module.scss';

export default function LessonTip({ children } : PropsWithChildren<unknown>) {
  return (
    <p className={`${styles['lesson-tip']} d-flex align-items-center`}>
      <FontAwesomeIcon icon={faLightbulb} />
      {children}
    </p>
  );
}
