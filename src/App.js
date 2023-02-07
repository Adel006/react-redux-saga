import "./App.css";
import Main from "./components/main";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
