export enum Steps {
  INITIAL_INTERVIEW = "Entrevista inicial",
  TECNICAL_INTERVIEW = "Entrevista técnica",
  OFFER = "Oferta",
  ASSIGN = "Asignación",
  REJECTED = "Rechazo",
}

export interface Candidate {
  id: string;
  name: string;
  step: Steps;
  comments: string;
}
