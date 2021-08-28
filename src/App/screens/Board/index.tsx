import React, {useEffect, useState} from "react";

import {Candidate, Steps} from "../../../types/candidate";
import candidatesService from "../../../api";

import {COLUMNS} from "./constants";
import Column from "./components/Column";
import styles from "./styles.module.scss";

function Board() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const candidatesByStep = (step: Steps) =>
    candidates.filter((candidate) => candidate.step === step);

  useEffect(() => {
    candidatesService.candidates.list().then(setCandidates);
  }, []);

  return (
    <main
      className={styles.board}
      style={{
        gridTemplateColumns: `repeat(${COLUMNS.length}, 1fr)`,
      }}
    >
      {COLUMNS.map(({step, canAddCandidate}) => (
        <Column
          key={step}
          canAddCandidate={canAddCandidate}
          candidates={candidatesByStep(step)}
          title={step}
        />
      ))}
    </main>
  );
}

export default Board;
