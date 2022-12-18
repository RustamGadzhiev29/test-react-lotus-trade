import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { hourglass } from "@fortawesome/fontawesome-free";

const Timer = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 2,
    seconds: 0,
  });

  const reset = () =>
    setTime({
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });

  const tick = () => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) reset();
    else if (time.hours === 0 && time.seconds === 0) {
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
    <tr>
      <th>ХОД</th>
      <th>
        <div className={styles.timer}>
          <p>{`${time.hours.toString().padStart(2, "0")}:${time.minutes
            .toString()
            .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</p>
          {/* <FontAwesomeIcon icon={hourglass} /> */}
        </div>
      </th>
    </tr>
  );
};

export default Timer;
