import React, { useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = 2000;
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <tr>
      <th>ХОД</th>
      <th>
        <div className={styles.timer} />
      </th>
      <th>Участник №2</th>
      <th>Участник №3</th>
      <th>Участник №4</th>
    </tr>
  );
};

export default Timer;
