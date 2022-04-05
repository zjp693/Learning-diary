import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <section>
      <h1>编辑员</h1>
      <br />
      <p>你已经被分配了编辑员角色, 所以才能访问当前页面</p>
      <div className="flexGrow">
        <Link to="/home">首页</Link>
      </div>
    </section>
  );
};

export default Editor;
