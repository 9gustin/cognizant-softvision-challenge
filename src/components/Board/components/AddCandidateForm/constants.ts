export enum FIELDS {
  NAME = "name",
  COMMENTS = "comments",
}

export interface Item {
  key: string;
  [FIELDS.NAME]?: string;
  [FIELDS.COMMENTS]?: string;
}

export const defaultValues = {
  key: "ITEM",
  [FIELDS.NAME]: "",
  [FIELDS.COMMENTS]: "",
};

export type onAddFunction = (data: {item: Item; columnKey: string}) => void;
