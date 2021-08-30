import React from "react";

import AddCandidateForm from "../../AddCandidateForm";
import {onAddFunction} from "../../AddCandidateForm/constants";

interface Props {
  onAddItem?: onAddFunction;
  adding: boolean;
  toggleAdding: () => void;
  columnKey: string;
}

function AddingItem({onAddItem, adding, toggleAdding, columnKey}: Props) {
  if (!onAddItem) return null;

  if (adding)
    return <AddCandidateForm columnKey={columnKey} onAdd={onAddItem} onCancel={toggleAdding} />;

  return (
    <button type="button" onClick={toggleAdding}>
      Agregar
    </button>
  );
}

export default AddingItem;
