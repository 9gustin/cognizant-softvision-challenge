import React, {useEffect, useState} from "react";

import {Candidate, Steps} from "../../../types/candidate";
import candidatesService from "../../../api";
import Board from "../../../components/Board";
import {Item} from "../../../components/Board/components/AddCandidateForm/constants";

import {COLUMNS} from "./constants";

function Home() {
  const [candidates, setCandidates] = useState<Candidate[] | null>(null);

  const onAddCandidate = ({item: {name, comments}, columnKey}: {item: Item; columnKey: string}) => {
    if (name && comments) {
      const mappedCandidate = {
        id: name,
        name,
        step: columnKey as Steps,
        comments,
      };

      setCandidates((prevCandidates) => {
        const newCandidates = prevCandidates
          ? [...prevCandidates, mappedCandidate]
          : [mappedCandidate];

        return newCandidates;
      });
    } else alert("Debes completar todos los campos para agregar un candidato!");
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
    candidates?.map(({step, name, comments}) => ({
      key: step,
      name,
      comments,
    })) ?? [];

  return candidates ? (
    <Board columns={COLUMNS} data={mappedCandidates} onAddItem={onAddCandidate} />
  ) : (
    "Cargando..."
  );
}

export default Home;
