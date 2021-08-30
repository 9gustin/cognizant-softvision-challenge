import React, {useState} from "react";

import {Item, onAddFunction, onMoveFunction} from "../AddCandidateForm/constants";
import Items from "../Items";

import AddingItem from "./components/AddingItem";
import styles from "./styles.module.scss";

interface Props {
  columnKey: string;
  title: string;
  items: Item[];
  onAddItem?: onAddFunction;
  onMoveItem: onMoveFunction;
  steps: {
    next?: string;
    prev?: string;
  };
}

function Column({title, items, onAddItem, columnKey, onMoveItem, steps}: Props) {
  const [adding, setAdding] = useState(false);

  const toggleAdding = () => setAdding((prevAdding) => !prevAdding);

  return (
    <div className={styles.column}>
      <h3>{title}</h3>
      {items.length ? (
        <Items items={items} steps={steps} onMoveItem={onMoveItem} />
      ) : (
        <span>Columna vacia</span>
      )}
      <AddingItem
        adding={adding}
        columnKey={columnKey}
        toggleAdding={toggleAdding}
        onAddItem={onAddItem}
      />
    </div>
  );
}

export default Column;
