import React from "react";

import {Candidate} from "../../../../../types/candidate";
import AddCandidateForm from "../AddCandidateForm";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  candidates: Candidate[];
  onAddCandidate?: () => void;
}

function Column({title, candidates, onAddCandidate}: Props) {
  return (
    <div className={styles.column}>
      <h3>{title}</h3>
      <ul>
        {candidates.map(({id, name}) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      {onAddCandidate && <AddCandidateForm onAddCandidate={onAddCandidate} />}
    </div>
  );
}

export default Column;
