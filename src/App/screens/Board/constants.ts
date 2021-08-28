import {Steps} from "../../../types/candidate";

export const COLUMNS = [
  {
    canAddCandidate: true,
    order: 1,
    step: Steps.INITIAL_INTERVIEW,
  },
  {
    step: Steps.TECNICAL_INTERVIEW,
    order: 2,
  },
  {
    step: Steps.OFFER,
    order: 3,
  },
  {
    step: Steps.ASSIGN,
    order: 4,
  },
  {
    step: Steps.REJECTED,
    order: 5,
  },
];
