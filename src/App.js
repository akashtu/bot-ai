import "./App.css";
import { Home } from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page1 } from "./Components/Pages/Page1/Page1";
import { ConvHistory } from "./Components/ConvHistory/ConvHistory";
// import { FeedBack } from "./Components/FeedBack/FeedBack";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Page1 />} />
          <Route path="/convhistory" element={<ConvHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
