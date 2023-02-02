import React from "react";
import Piece from "../Piece/Piece";

import "./Heap.scss";

const Heap = ({ id: heapId, amount, setSelection }) => {
  const pieces = [];
  for (let pieceId = 0; pieceId < amount; pieceId++) {
    const pieceKey = `piece_${pieceId}`;
    pieces.push(
      <Piece
        key={pieceKey}
        id={pieceKey}
        heapId={heapId}
      />
    );
  }
  return (
    <div
      className='heap'
      id={`heap_${heapId}`}>
      {pieces}
    </div>
  );
};

export default Heap;
