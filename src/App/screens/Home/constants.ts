import {Steps} from "../../../types/candidate";

export const COLUMNS = [
  {
    canAddItem: true,
    order: 1,
    key: Steps.INITIAL_INTERVIEW,
    name: Steps.INITIAL_INTERVIEW,
  },
  {
    key: Steps.TECNICAL_INTERVIEW,
    name: Steps.TECNICAL_INTERVIEW,
    order: 2,
  },
  {
    key: Steps.OFFER,
    name: Steps.OFFER,
    order: 3,
  },
  {
    key: Steps.ASSIGN,
    name: Steps.ASSIGN,
    order: 4,
  },
  {
    key: Steps.REJECTED,
    name: Steps.REJECTED,
    order: 5,
  },
];
