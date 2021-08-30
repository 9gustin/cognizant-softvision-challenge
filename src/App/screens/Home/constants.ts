import {Steps} from "../../../types/candidate";

export const COLUMNS = [
  {
    canAddItem: true,
    key: Steps.INITIAL_INTERVIEW,
    name: Steps.INITIAL_INTERVIEW,
    order: 1,
    steps: {
      next: Steps.TECNICAL_INTERVIEW,
    },
  },
  {
    key: Steps.TECNICAL_INTERVIEW,
    name: Steps.TECNICAL_INTERVIEW,
    order: 2,
    steps: {
      next: Steps.OFFER,
      prev: Steps.INITIAL_INTERVIEW,
    },
  },
  {
    key: Steps.OFFER,
    name: Steps.OFFER,
    order: 3,
    steps: {
      next: Steps.ASSIGN,
      prev: Steps.TECNICAL_INTERVIEW,
    },
  },
  {
    key: Steps.ASSIGN,
    name: Steps.ASSIGN,
    order: 4,
    steps: {
      next: Steps.REJECTED,
      prev: Steps.OFFER,
    },
  },
  {
    key: Steps.REJECTED,
    name: Steps.REJECTED,
    order: 5,
    steps: {
      prev: Steps.ASSIGN,
    },
  },
];

export const CANDIDATES_CACHE_KEY = "candidates";
