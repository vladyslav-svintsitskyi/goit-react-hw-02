import React from "react";
import s from "./Options.module.css";

const Options = ({ onUpdate, totalFeedback, onReset }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <button onClick={() => onUpdate(`good`)}>Good</button>
      </li>
      <li className={s.item}>
        <button onClick={() => onUpdate(`neutral`)}>Neutral</button>
      </li>
      <li className={s.item}>
        <button onClick={() => onUpdate(`bad`)}>Bad</button>
      </li>
      {totalFeedback > 0 && (
        <li className={s.item}>
          <button onClick={onReset}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
