import React, {useEffect, useState} from "react";

import {Candidate, Steps} from "../../../types/candidate";
import candidatesService from "../../../api";
import Board from "../../../components/Board";
import {Item, onAddFunction} from "../../../components/Board/components/AddCandidateForm/constants";

import {COLUMNS} from "./constants";

function Home() {
  const [candidates, setCandidates] = useState<Candidate[] | null>(null);

  const onAddCandidate: onAddFunction = ({item: {name, comments}, columnKey}) => {
    if (name && comments) {
      const mappedCandidate = {
        id: name,
        name,
        step: columnKey as Steps,
        comments,
      };

      const newCandidates = candidates ? [...candidates, mappedCandidate] : [mappedCandidate];

      setCandidates(newCandidates);
    } else alert("Debes completar todos los campos para agregar un candidato!");
  };

  const moveCandidate = ({id}: Item, to: string) => {
    if (!candidates) return;

    const newCandidates = candidates.map((candidate) => ({
      ...candidate,
      step: candidate.id === id ? (to as Steps) : candidate.step,
    }));

    setCandidates(newCandidates);
  };

  useEffect(() => {
    if (candidates === null) {
      candidatesService.candidates
        .list()
        .then(setCandidates)
        .catch(() => {
          const cachedCandidates = localStorage.getItem("candidates");

          if (cachedCandidates) {
            setCandidates(JSON.parse(cachedCandidates));
          }
        });
    } else {
      localStorage.setItem("candidates", JSON.stringify(candidates));
    }
  }, [candidates]);

  const mappedCandidates =
    candidates?.map(({id, step, name, comments}) => ({
      id,
      name,
      comments,
      key: step,
    })) ?? [];

  return candidates ? (
    <Board
      columns={COLUMNS}
      data={mappedCandidates}
      onAddItem={onAddCandidate}
      onMoveItem={moveCandidate}
    />
  ) : (
    <span>Cargando...</span>
  );
}

export default Home;
