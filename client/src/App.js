import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Landing from "./Pages/Landing";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import User from "./Pages/User";
import Protected from "./Middlewares/Protected";

//TODO filter and profile
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user" element={<Protected Component={User} />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
