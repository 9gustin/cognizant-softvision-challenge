import React, {useState} from "react";

import {Item, onAddFunction, onMoveFunction} from "../AddCandidateForm/constants";
import Items from "../Items";

import AddingItem from "./components/AddingItem";
import styles from "./styles.module.scss";

interface Props {
  columnKey: string;
  title: string;
  items: Item[];
  className?: string;
  onAddItem?: onAddFunction;
  onMoveItem: onMoveFunction;
  steps: {
    next?: string;
    prev?: string;
  };
}

function Column({title, className, items, onAddItem, columnKey, onMoveItem, steps}: Props) {
  const [adding, setAdding] = useState(false);

  const toggleAdding = () => setAdding((prevAdding) => !prevAdding);

  const handleAddItem: onAddFunction = (...args) => {
    setAdding(false);
    onAddItem?.(...args);
  };

  return (
    <div className={`${styles.column} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      {items.length ? (
        <Items items={items} steps={steps} onMoveItem={onMoveItem} />
      ) : (
        <span className={styles.emptyState}>Columna vacia</span>
      )}
      <AddingItem
        adding={adding}
        columnKey={columnKey}
        toggleAdding={toggleAdding}
        onAddItem={onAddItem ? handleAddItem : undefined}
      />
    </div>
  );
}

export default Column;
