export enum FIELDS {
  NAME = "name",
  COMMENTS = "comments",
}

export interface Item {
  id: string;
  key: string;
  [FIELDS.NAME]?: string;
  [FIELDS.COMMENTS]?: string;
}

export const defaultValues = {
  id: "ITEM",
  key: "ITEM",
  [FIELDS.NAME]: "",
  [FIELDS.COMMENTS]: "",
};

export type onAddFunction = (data: {item: Item; columnKey: string}) => void;

export type onMoveFunction = (item: Item, to: string) => void;
