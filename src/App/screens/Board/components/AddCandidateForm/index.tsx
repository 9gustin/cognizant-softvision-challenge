import React from "react";

interface Props {
  onAddCandidate: () => void;
}

function AddCandidateForm({onAddCandidate}: Props) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddCandidate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
    </form>
  );
}

export default AddCandidateForm;
