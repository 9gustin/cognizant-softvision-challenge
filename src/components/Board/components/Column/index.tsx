import React from "react";

import AddCandidateForm from "../AddCandidateForm";
import {onAddFunction} from "../AddCandidateForm/constants";

import styles from "./styles.module.scss";

interface Props<DataType> {
  columnKey: string;
  title: string;
  items: DataType[];
  onAddItem?: onAddFunction;
}

function Column<DataType>({title, items, onAddItem, columnKey}: Props<DataType>) {
  return (
    <div className={styles.column}>
      <h3>{title}</h3>
      <ul>
        {/* TODO: Replace any type */}
        {items.map((item: any, index: number) => (
          <li key={`${item.id}-${index}`}>{item.name}</li>
        ))}
      </ul>
      {onAddItem && <AddCandidateForm columnKey={columnKey} onAdd={onAddItem} />}
    </div>
  );
}

export default Column;
