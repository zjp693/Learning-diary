import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Editor from "./components/Editor";
import Admin from "./components/Admin";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import Lounge from "./components/Lounge";
import LinkPage from "./components/LinkPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequiredAuth from "./components/RequiredAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 公开路由 */}
          <Route path="" element={<LinkPage />} />
          <Route path="login" element={<Login />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* 受保护的路由 */}
          <Route element={<RequiredAuth allowRoles={[2001]} />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route element={<RequiredAuth allowRoles={[1984]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>
          <Route element={<RequiredAuth allowRoles={[5150]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route element={<RequiredAuth allowRoles={[1984, 5150]} />}>
            <Route path="lounge" element={<Lounge />} />
          </Route>

          {/* 捕获未匹配路由 */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
