import React, { useState } from "react";

function App() {
  const [formState, setFormState] = useState({
    username: "",
  });
const onChangehander=(e)=>{
  setFormState({
    ...formState,
    [e.target.name]:e.target.value
  })
}

const onSubmitHander=(e)=>{
  e.preventDefault();
  console.log(formState);
}
  return (
    <form onSubmit={onSubmitHander}>
      <input type="text" name="username" value={formState.username}
      onChange={onChangehander}
      />
      <input type="submit" />
    </form>
  );
}

export default App;
