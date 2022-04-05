// import React, { useState } from "react";

// function App() {
//   const [formState, setFormState] = useState({
//     agree: false,
//   });
//   const onChageHander = (e) => {
//     // 如果表单控件是复选框 获取checked 属性的值作为value
//     const value =
//       e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setFormState({
//       ...formState,
//       [e.target.name]: value,
//     });
//   };
//   return (
//     <>
//       <input
//         type="checkbox"
//         name="agree"
//         checked={formState.agree}
//         onChange={onChageHander}
//       />
//     </>
//   );
// }

// export default App;



// 配合多个多选框使用
import React, { useState } from 'react'
  // 模拟数据 爱好数组
  const data = [
    { id: 1, title: "足球" },
    { id: 2, title: "篮球" },
    { id: 3, title: "橄榄球" },
  ];
function App() {
// 声明表单状态
const [formState,setFormState] = useState({
  hobbies:[]
})
  // 爱好数组映射, 爱好数组中有多少爱好, 该状态数组中就有多少布尔值与之对应, 
  // 表示对应的爱好当前的选中状态是什么
  const [checkedState,setCheckedState]=useState(
    new Array(data.length).fill(false)
  )
  // 用于现在爱好后执行的事件处理函数
  const hobbyChangeHandler = (index) => {
    // index 为用户更改的爱好在原数组中的索引
    // 根据 index 找到爱好对应的布尔值, 取反, 返回新的爱好数组对应的是否选中的状态布尔值数组
    const updatedCheckedState = checkedState.map((checked, i) =>  i === index ? !checked : checked);
    // 更新爱好状态布尔值数组, 供下次用户选择时使用
    setCheckedState(updatedCheckedState);
    // 根据爱好布尔值状态数组, 从原数组中找到用户选中的爱好 id
    const udpatedHobbies = updatedCheckedState.reduce(
      (result, checked, index) => {
        if (checked) result.push(data[index].id);
        return result;
      },
      []
    );
    // 更新表单状态
    setFormState({ ...formState, hobbies: udpatedHobbies });
  };
  return (
    <>
    {data.map((item, index) => (
      <p key={item.id}>
        <input
          type="checkbox"
          onChange={() => hobbyChangeHandler(index)}
          />
        {item.title}
      </p>
    ))}
  </>
  )
}

export default App
