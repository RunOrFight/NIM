import React, { useState } from "react";

import "./Piece.scss";

const Piece = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={`piece${isSelected ? " selected" : ""}`}
      onClick={() => setIsSelected(!isSelected)}></div>
  );
};

export default Piece;
