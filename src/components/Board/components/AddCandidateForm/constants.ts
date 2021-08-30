export enum FIELDS {
  NAME = "name",
  COMMENTS = "comments",
}

export interface Item {
  [FIELDS.NAME]?: string;
  [FIELDS.COMMENTS]?: string;
}

export const defaultValues = {
  [FIELDS.NAME]: "",
  [FIELDS.COMMENTS]: "",
};

export type onAddFunction = (data: {item: Item; columnKey: string}) => void;
