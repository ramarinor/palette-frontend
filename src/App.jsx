import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Paints from "./pages/Paints";
import Samples from "./pages/Samples";
import PaintDetails from "./pages/PaintDetails";
import NotFound from "./pages/NotFound";
import SampleDetails from "./pages/SampleDetails";
import Login from "./pages/Login";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Cart from "./pages/Cart";
import Calculator from "./pages/Calculator";

function App() {
  const [user, setUser] = useState(null);
  const [modalMessage, setModalMessage] = useState(null);
  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="paints" element={<Paints />} />
        <Route path="samples" element={<Samples />} />
        <Route
          path="paints/:id"
          element={
            <PaintDetails
              user={user}
              setUser={setUser}
              setModalMessage={setModalMessage}
            />
          }
        />
        <Route
          path="samples/:id"
          element={
            <SampleDetails
              user={user}
              setUser={setUser}
              setModalMessage={setModalMessage}
            />
          }
        />
        <Route
          path="login"
          element={
            <Login setUser={setUser} setModalMessage={setModalMessage} />
          }
        />
        <Route path="cart" element={<Cart user={user} setUser={setUser} />} />
        <Route
          path="calculator"
          element={<Calculator setModalMessage={setModalMessage} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {modalMessage && (
        <Modal setModalMessage={setModalMessage} modalMessage={modalMessage} />
      )}
    </div>
  );
}

export default App;
