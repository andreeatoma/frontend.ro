import React from 'react';
import {
  faCalendarCheck, faHourglassHalf, faQuestion, faUserAstronaut, faUserNinja,
} from '@fortawesome/free-solid-svg-icons';

import { faSlideshare } from '@fortawesome/free-brands-svg-icons';
import CounterCard from './CounterCard/CounterCard';

import styles from './LandingStats.module.scss';

interface Props {
  participants: number;
  events: number;
  trainers: number;
  hoursOfTraining: number;
  slides: number;
  countFrontEndWord: number;
}

export default function LandingStats({
  participants, events, trainers, hoursOfTraining, slides, countFrontEndWord,
} : Props) {
  return (
    <div className={`${styles['landing-stats']}`}>
      <section>
        <h2 className="text-center">
          Statistici
        </h2>
        <ul className="d-flex justify-content-center align-items-center">
          <li>
            <CounterCard icon={faUserAstronaut} counter={participants} description="frontend-eri curioși" />
          </li>
          <li>
            <CounterCard icon={faCalendarCheck} counter={events} description="workshop-uri gratuite" />
          </li>
          <li>
            <CounterCard icon={faUserNinja} counter={trainers} description="ninja trainers" />
          </li>
          <li>
            <CounterCard icon={faHourglassHalf} counter={hoursOfTraining} description="ore de training" />
          </li>
          <li>
            <CounterCard icon={faSlideshare} counter={slides} description="slide-uri" />
          </li>
          <li>
            <CounterCard icon={faQuestion} counter={countFrontEndWord} description="apariții ale cuvântului FrontEnd" />
          </li>
        </ul>
      </section>
    </div>
  );
}
