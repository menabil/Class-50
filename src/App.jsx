import "./App.css";
import { Route, Routes } from "react-router-dom";
import Rootlayouts from "./components/layouts/Rootlayouts";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Contacts from "./components/pages/Contacts";
import Error from "./components/pages/Error";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
