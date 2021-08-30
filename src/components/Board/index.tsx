import React from "react";

import {COLUMNS} from "../../App/screens/Home/constants";

import {Item, onAddFunction} from "./components/AddCandidateForm/constants";
import Column from "./components/Column";
import styles from "./styles.module.scss";

interface Props {
  columns: {
    key: string;
    name: string;
    canAddItem?: boolean;
    order?: number;
  }[];
  data: Item[];
  onAddItem: onAddFunction;
}

function Board({columns, data, onAddItem}: Props) {
  return (
    <main
      className={styles.board}
      style={{
        gridTemplateColumns: `repeat(${COLUMNS.length}, 1fr)`,
      }}
    >
      {columns.map(({key, name, canAddItem}) => (
        <Column
          key={key}
          columnKey={key}
          items={data.filter((item: Item) => item.key === key)}
          title={name}
          onAddItem={canAddItem ? onAddItem : undefined}
        />
      ))}
    </main>
  );
}

export default Board;
