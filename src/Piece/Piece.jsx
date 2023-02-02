import React, { useContext } from "react";
import { SelectionContext } from "../context";

import "./Piece.scss";

const Piece = ({ id, heapId }) => {
  const { selection, setSelection } = useContext(SelectionContext);

  const pieceKey = `${id}_${heapId}`;

  function onPieceClick() {
    if (selection.heap !== heapId) {
      setSelection({ heap: heapId, pieces: [pieceKey] });
    } else {
      if (selection.pieces.includes(pieceKey)) {
        setSelection({
          heap: heapId,
          pieces: [...selection.pieces].filter((piece) => piece !== pieceKey)
        });
      } else {
        setSelection({ heap: heapId, pieces: [...selection.pieces, pieceKey] });
      }
    }
  }

  return (
    <div
      id={pieceKey}
      className={`piece${
        selection.pieces.includes(pieceKey) ? " selected" : ""
      }`}
      onClick={onPieceClick}></div>
  );
};

export default Piece;
