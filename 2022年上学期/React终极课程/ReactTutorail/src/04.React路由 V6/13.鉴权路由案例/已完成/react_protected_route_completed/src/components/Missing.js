import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1>哎呀!</h1>
      <p>页面走丢了</p>
      <div className="flexGrow">
        <Link to="/">访问主页</Link>
      </div>
    </article>
  );
};

export default Missing;
