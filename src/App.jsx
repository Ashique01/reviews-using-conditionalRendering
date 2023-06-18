import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Reviews from "./components/Reviews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Reviews />
    </>
  );
}

export default App;
