import React from "react";

import {COLUMNS} from "../../App/screens/Home/constants";

import Column from "./components/Column";
import styles from "./styles.module.scss";

interface Props<DataType> {
  columns: {
    key: string;
    name: string;
    canAddItem?: boolean;
    order?: number;
  }[];
  data: DataType[];
  onAddItem: () => void;
  field: string;
}

function Board<DataType>({columns, data, onAddItem, field}: Props<DataType>) {
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
          items={data.filter(
            // TODO: Remove any type
            (item: DataType) => field in item && (item as any)[field] === key,
          )}
          title={name}
          onAddItem={canAddItem ? onAddItem : undefined}
        />
      ))}
    </main>
  );
}

export default Board;
