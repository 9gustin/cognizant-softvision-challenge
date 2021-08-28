import React from "react";

import {Candidate} from "../../../../../types/candidate";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  candidates: Candidate[];
  canAddCandidate?: boolean;
}

function Column({title, candidates, canAddCandidate}: Props) {
  return <div className={styles.column}>{title}</div>;
}

export default Column;
