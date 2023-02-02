import Heap from "./Heap/Heap";

function App() {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
      <Heap amount={3} />
      <Heap amount={5} />
      <Heap amount={7} />
    </div>
  );
}

export default App;
