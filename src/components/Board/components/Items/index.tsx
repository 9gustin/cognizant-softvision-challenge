import React from "react";

import {Item, onMoveFunction} from "../AddCandidateForm/constants";

import styles from "./styles.module.scss";

interface Props {
  items: Item[];
  onMoveItem: onMoveFunction;
  steps: {
    next?: string;
    prev?: string;
  };
}

function Items({items, onMoveItem, steps: {next, prev}}: Props) {
  return (
    <ul className={styles.list}>
      {items.map((item: Item, index: number) => (
        <li key={`${item.name}-${index}`} className={styles.card}>
          <div className={styles.data}>
            {item.name}
            <span className={styles.comments}>{item.comments}</span>
          </div>
          <div>
            {prev && (
              <button type="button" onClick={() => onMoveItem(item, prev)}>
                &#60;
              </button>
            )}
            {next && (
              <button type="button" onClick={() => onMoveItem(item, next)}>
                &#62;
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Items;
