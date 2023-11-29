import { useAppStore } from "./stores/app-store";
import { useShallow } from "zustand/react/shallow";

export default function Count() {
  const { count, decrement, increment } = useAppStore(
    useShallow((state) => ({
      count: state.count,
      decrement: state.decrement,
      increment: state.increment,
    }))
  );

  console.log("Render Count!");

  return (
    <div>
      <button onClick={decrement}>➖</button>
      <span>Count : {count}</span>
      <button onClick={increment}>➕</button>
    </div>
  );
}
