import { useState } from "react";
import { SelectionContext } from "./context";
import Heap from "./Heap/Heap";
import Toolbar from "./Toolbar/Toolbar";

function App() {
  const [selection, setSelection] = useState({ heap: null, pieces: [] });
  return (
    <SelectionContext.Provider value={{ selection, setSelection }}>
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
        <Heap
          id={1}
          amount={3}
        />
        <Heap
          id={2}
          amount={5}
        />
        <Heap
          id={3}
          amount={7}
        />
      </div>
      <Toolbar />
    </SelectionContext.Provider>
  );
}

export default App;
