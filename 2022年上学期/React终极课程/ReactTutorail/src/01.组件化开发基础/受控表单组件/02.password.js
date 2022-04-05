import React, { useState } from "react";
// 优化前
// function App() {
//   const [formState, setFormState] = useState({
//     username: "",
//     password: "",
//   });
//   return (
//     <>
//       <input
//         type="text"
//         name="username"
//         value={formState.username}
//         onChange={(e) =>
//           setFormState({ ...formState, username: e.target.value })
//         }
//       ></input>
//            <input
//         type="password"
//         name="password"
//         value={formState.password}
//         onChange={(e) =>
//           setFormState({ ...formState, password: e.target.value })
//         }
//       ></input>
//     </>
//   );
// }

// 优化后
function App() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler=(e)=>{
    setFormState({
      ...formState,
      [e.target.name]:e.target.value
    })
  }
  return (
    <>
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={onChangeHandler }
      ></input>
           <input
        type="password"
        name="password"
        value={formState.password}
        onChange={onChangeHandler }
      ></input>
    </>
  );
}
export default App;
