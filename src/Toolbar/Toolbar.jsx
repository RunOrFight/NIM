import React, { useContext } from "react";
import { SelectionContext } from "../context";

import "./Toolbar.scss";

const Toolbar = () => {
  const { selection } = useContext(SelectionContext);
  const selectionLength = selection.pieces.length;
  return (
    <div className={`toolbar${selectionLength > 0 ? "" : " invisible"}`}>
      <button className='toolbar-button'>Grab {selectionLength}</button>
      <button className='toolbar-button'>Grab All</button>
      <button className='toolbar-button'>Cancel</button>
    </div>
  );
};

export default Toolbar;
