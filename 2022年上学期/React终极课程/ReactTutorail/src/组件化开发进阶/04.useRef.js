import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  });
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
          {count}
    </>
  );
}