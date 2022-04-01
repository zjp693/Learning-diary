import News from "./pages/News";
import InnerNews from "./pages/InnerNews";
import OuterNews from "./pages/OuterNews";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<News />}>
          <Route path="inner" element={<InnerNews />} />
          <Route path="outer" element={<OuterNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App