import { Link } from "react-router-dom";

const Lounge = () => {
  return (
    <section>
      <h1>休息区</h1>
      <br />
      <p>管理员和编辑员都可以访问休息区.</p>
      <div className="flexGrow">
        <Link to="/home">首页</Link>
      </div>
    </section>
  );
};

export default Lounge;
