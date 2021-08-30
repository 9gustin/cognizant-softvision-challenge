import React from "react";

import {COLUMNS} from "../../App/screens/Home/constants";

import {Item, onAddFunction, onMoveFunction} from "./components/AddCandidateForm/constants";
import Column from "./components/Column";
import styles from "./styles.module.scss";

interface Props {
  columns: {
    key: string;
    name: string;
    canAddItem?: boolean;
    order: number;
    steps: {
      prev?: string;
      next?: string;
    };
  }[];
  data: Item[];
  onAddItem: onAddFunction;
  onMoveItem: onMoveFunction;
}

function Board({columns, data, onAddItem, onMoveItem}: Props) {
  return (
    <main
      className={styles.board}
      style={{
        gridTemplateColumns: `repeat(${COLUMNS.length}, 1fr)`,
      }}
    >
      {columns
        .sort((columnA, columnB) => columnA.order - columnB.order)
        .map(({key, name, canAddItem, steps}) => (
          <Column
            key={key}
            columnKey={key}
            items={data.filter((item: Item) => item.key === key)}
            steps={steps}
            title={name}
            onAddItem={canAddItem ? onAddItem : undefined}
            onMoveItem={onMoveItem}
          />
        ))}
    </main>
  );
}

export default Board;
