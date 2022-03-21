import useAsync from "./Components/useAsync";

const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
    console.log(rnd);
      rnd <= 5 ? resolve("成功 🙌") : reject("失败 😞");
    }, 2000);
  });
};

function App() {
  const { status, value, error, execute } = useAsync(myFunction);
  return (
    <div>
      {status === "idle" && <div>Start your journey by clicking a button</div>}
      {status === "success" && <div>{value}</div>}
      {status === "error" && <div>{error}</div>}
      <button onClick={execute} disabled={status === "pending"}>
        {status !== "pending" ? "Click me" : "Loading..."}
      </button>
    </div>
  );
}

export default App;