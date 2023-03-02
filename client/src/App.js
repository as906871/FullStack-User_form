import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heading from "./page/Heading";
import Home from "./page/Home";
function App() {
  return (
    <BrowserRouter>
    <Heading />
      <div>
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
