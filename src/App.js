import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import CarPage from "./pages/CarPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<SignUp />} />
    //   <Route path="/second" element={<CarPage />} />
    // </Routes>
    <>
      {" "}
      {/* <SignUp /> */}
      <CarPage />
    </>
  );
}

export default App;
