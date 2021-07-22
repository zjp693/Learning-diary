import "./App.css";
import React, { useState,useEffect } from "react";
var flang = false
  
function App() {
  //  设置初始值
  const [state, setstate] = useState([
    { id: 1, name: "西游记", ctime: "2021/7/10" },
    { id: 2, name: "水浒传", ctime: "2021/7/10" },
    { id: 3, name: "红楼梦", ctime: "2021/7/10" },
  ]);
  // 编号
  const [id, setid] = useState("");
  // 书籍名称
  const [name, setname] = useState("");
  // 搜索值
  const [keywords, setkeywords] = useState("");



  // 绑定数据
  const handlerModel = (e) => {
    console.log(e.target.name);
    const hanlderFu = {
      id: () => {
       setid(e.target.value)
      },
      name: () => {
         setname(e.target.value)
      },
      keywords: () => {
         setkeywords(e.target.value)
      },
    };
    hanlderFu[e.target.name]();
  };

    //  添加
  const halderAdd = () => {
    if(!(id && name)) return alert("输入不能为空")
    const newstate = [...state, { id: parseInt(id), name: name, ctime: new Date().toLocaleDateString() }]
    setstate(newstate)
    setid("")
    setname("")
  };
  // 删除
  const handlerDel = (id) => {
    const newstate = state.filter(item => item.id !== id)
    setstate(newstate)
  }
  // 搜索
  const searchItem = () => {
    return state.filter(item=>item.name.includes(keywords) )
  }

  useEffect(() => {
 setTimeout(() => {
      if (flang) {
      alert("操作成功")
       flang=false
    }
      flang=true
 }, 20);
 
  }, [state])
  return (
    <div className="App">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">图书管理系统</h3>
        </div>

        <div className="panel-body">
          <div className="form-group form-inline">
            <div className="input-group">
              <div className="input-group-addon">编号</div>
              <input
                type="text"
                className="form-control"
                name="id"
                value={id}
                onChange={(e) => handlerModel(e)}
              />
            </div>

            <div className="input-group">
              <div className="input-group-addon">书籍名称</div>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                  onChange={(e) => handlerModel(e)}
              />
            </div>

            <div className="input-group">
              <button className="btn btn-primary" onClick={() => halderAdd()}>
                添加
              </button>
            </div>

            <div className="input-group pull-right">
              <div className="input-group-addon">按书名搜索</div>
              <input
                type="text"
                className="form-control"
                name="keywords"
                value={keywords}
                  onChange={(e) => handlerModel(e)}
              />
            </div>
          </div>
        </div>

        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>编号</th>
              <th>书籍名称</th>
              <th>添加时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {searchItem().map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.ctime}</td>
                <td>
                  <a href="#!" onClick={()=>handlerDel(item.id)}>删除</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
