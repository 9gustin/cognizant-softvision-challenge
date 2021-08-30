import React, {useState} from "react";

import {defaultValues, FIELDS, Item, onAddFunction} from "./constants";

interface Props {
  columnKey: string;
  onAdd: onAddFunction;
  values?: Item;
}

function AddCandidateForm({onAdd, values = defaultValues, columnKey}: Props) {
  const [item, setItem] = useState<Item>(values ?? {});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd({item, columnKey});
    setItem(defaultValues);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem((prevItem) => ({...prevItem, [event.target.name as FIELDS]: event.target.value ?? ""}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input required name={FIELDS.NAME} type="text" value={item.name} onChange={handleChange} />
      <input
        required
        name={FIELDS.COMMENTS}
        type="text"
        value={item.comments}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddCandidateForm;
