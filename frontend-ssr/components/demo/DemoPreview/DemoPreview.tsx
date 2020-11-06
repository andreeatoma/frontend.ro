import React, { PropsWithChildren } from 'react';
import styles from './DemoPreview.module.scss';

export default function DemoPreview({ children } : PropsWithChildren<void>) {
  return (
    <div className={styles['demo-preview']}>
      {children}
    </div>
  );
}
