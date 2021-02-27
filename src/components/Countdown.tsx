import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css";


export function Countdown() {
 
  // padStart -> se não tiver 2 números ele coloca o 0 no inicio \/
  const [minuteLeft, minuteRight] = String(minutos).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(segundos).padStart(2, "0").split("");

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

      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo Encerrado
        </button>
      ) : (
          <>
            {isActive ? (
              <button
                onClick={resetCountdown}
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              >
                Abandonar ciclo
              </button>
            ) : (
                <button
                  onClick={startCountdown}
                  type="button"
                  className={styles.countdownButton}
                >
                  Iniciar um Ciclo
                </button>
              )}
          </>
        )}


    </div>
  );
}
