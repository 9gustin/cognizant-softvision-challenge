import React, {useEffect, useState} from "react";

import {Candidate} from "../../../types/candidate";
import candidatesService from "../../../api";
import Board from "../../../components/Board";

import {COLUMNS} from "./constants";

function Home() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const onAddCandidate = () => console.log("ADD CANDIDATE");

  useEffect(() => {
    candidatesService.candidates.list().then(setCandidates);
  }, []);

  return <Board columns={COLUMNS} data={candidates} field="step" onAddItem={onAddCandidate} />;
}

export default Home;
