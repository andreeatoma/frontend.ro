import React, { useState } from 'react';
import EventService from '~/services/Event.service';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import styles from './WaitListConfirmation.module.scss';

function WaitListConfirmation() {
  const [isLoading, setIsLoading] = useState(false);

  const addToWaitlist = async (userData) => {
    setIsLoading(true);

    try {
      await EventService.addToWaitList(userData);
      SweetAlertService.toast({
        type: 'success',
        text: 'Te-am adăugat pe lista de așteptare, te vom contacta în curând!',
      });
    } catch (err) {
      SweetAlertService.toast({
        type: 'error',
        text: err.message || 'Ne pare rău! Nu am putut să te adăugam pe lista de așteptare. Te rugăm să mai încerci o dată.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles['waitlist-confirmation']}`}>
      <p>Ne pare rău, dar locurile la acest eveniment s-au ocupat.</p>
      <p>
        E posibil ca unii participanți să se retragă, deci dacă vrei, te putem
        pune pe o listă de așteptare.
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <button
          type="button"
          className="btn btn--light"
          onClick={SweetAlertService.closePopup as any}
        >
          Nu, m-am răzgândit
        </button>
        <button
          type="button"
          className={`btn btn--blue mb-2 ${isLoading ? 'btn--loading' : ''}`}
          disabled={isLoading}
          onClick={addToWaitlist}
        >
          Adaugă-mă pe listă
        </button>
      </div>
    </div>
  );
}

export default WaitListConfirmation;
