import React from "react";

import {Item} from "../AddCandidateForm/constants";

interface Props {
  items: Item[];
}

function Items({items}: Props) {
  return (
    <ul>
      {items.map(({name, comments}: Item, index: number) => (
        <li key={`${name}-${index}`}>
          {name}
          <span>{comments}</span>
        </li>
      ))}
    </ul>
  );
}

export default Items;
