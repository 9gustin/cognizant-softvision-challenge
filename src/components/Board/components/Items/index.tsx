import React from "react";

import {Item, onMoveFunction} from "../AddCandidateForm/constants";

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
    <ul>
      {items.map((item: Item, index: number) => (
        <li key={`${item.name}-${index}`}>
          {item.name}
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
          <span>{item.comments}</span>
        </li>
      ))}
    </ul>
  );
}

export default Items;
