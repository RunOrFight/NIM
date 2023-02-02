import React from "react";
import Piece from "../Piece/Piece";

import "./Heap.scss";

const Heap = ({ amount }) => {
  const pieces = [];
  for (let index = 0; index < amount; index++) {
    pieces.push(<Piece key={`piece_${index}`} />);
  }
  return <div className='heap'>{pieces}</div>;
};

export default Heap;
