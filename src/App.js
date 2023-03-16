import { Navigate, Route, Routes } from "react-router-dom";

import SideBar from "./components/SideBar";
import Content from "./components/Content";

import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import Productos from "./pages/Productos";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex flex-row min-h-screen">

        <SideBar />

        <Routes>
          <Route path="/" element={<Content><Home /></Content>} />
          <Route path="/Clientes" element={<Content><Clientes /></Content>} />
          <Route path="/Pedidos" element={<Content><Pedidos /></Content>} />
          <Route path="/Productos" element={<Content><Productos /></Content>} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;