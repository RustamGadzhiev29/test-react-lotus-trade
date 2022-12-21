import React, { useState, useEffect, FC } from "react";
import styles from "./Timer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { userType } from "../State/State";

type PropsType = {
  data: Array<userType>;
};

const Timer: FC<PropsType> = ({ data }) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 1,
    seconds: 59,
  });

  const [newState, setNewState] = useState(data);

  const [index, setIndex] = useState(2);

  const reset = () =>
    setTime({
      hours: time.hours,
      minutes: 1,
      seconds: 59,
    });

  const tick = () => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      setIndex(data.length === index ? 1 : index + 1);
      reset();
      setNewState(
        data.map((d) => {
          return d.id === index
            ? { ...d, isDisable: true }
            : { ...d, isDisable: false };
        })
      );
    } else if (time.hours === 0 && time.seconds === 0) {
      setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
    } else if (time.seconds === 0) {
      setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <>
      {newState.map((s) => (
        <th key={s.id}>
          {s.isDisable ? (
            <div className={styles.timerContainer}>
              <div className={styles.timer}>
                <p>{`${time.hours.toString().padStart(2, "0")}:${time.minutes
                  .toString()
                  .padStart(2, "0")}:${time.seconds
                  .toString()
                  .padStart(2, "0")}`}</p>
              </div>
              <FontAwesomeIcon className={styles.icon} icon={faHourglassEnd} />
            </div>
          ) : (
            " "
          )}
        </th>
      ))}
    </>
  );
};

export default Timer;
