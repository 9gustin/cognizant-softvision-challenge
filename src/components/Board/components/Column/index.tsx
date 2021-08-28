import React from "react";

import AddCandidateForm from "../AddCandidateForm";

import styles from "./styles.module.scss";

interface Props<DataType> {
  title: string;
  items: DataType[];
  onAddItem?: () => void;
}

function Column<DataType>({title, items, onAddItem}: Props<DataType>) {
  return (
    <div className={styles.column}>
      <h3>{title}</h3>
      <ul>
        {/* TODO: Replace any type */}
        {items.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {onAddItem && <AddCandidateForm onAddCandidate={onAddItem} />}
    </div>
  );
}

export default Column;
