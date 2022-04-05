import React, {useEffect, useState ,useCallback} from 'react'

function App() {
  const [number,setNumber]=useState(1)
const [dark,setDark]=useState(false)
const styles={
  background:dark?"black":"white",
  color:dark?"white":"black"
}
const getItems=useCallback(
  ()=>{
    return [number,number+1,number+2]

},[number])
  return (
  <>
  <div style={styles}>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    <button onClick={()=>setDark((dark)=>!dark)}>button</button>
    <List getItems={getItems}/>
    </div>
  </>
  )
}

function List({getItems}){
  const [items,setItems]=useState([])

  useEffect(()=>{
    setItems(getItems())
    console.log("update items");
  },[getItems])
  return (
    <div>
      {items.map((item)=>{
        <p key={item}>{item}</p>
      })}
    </div>
  )
}

export default App