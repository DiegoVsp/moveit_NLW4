import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutos = Math.floor(time / 60);
  const segundos = time % 60;
  // padStart -> se não tiver 2 números ele coloca o 0 no inicio \/
  const [minuteLeft, minuteRight] = String(minutos).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(segundos).padStart(2, '0').split('')

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }, [active,time])
  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <button onClick={startCountdown} type="button" className={styles.startCountdownButton}>
        Iniciar um Ciclo
      </button>
    </div>
  );
}