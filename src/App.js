import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Acesso from "./paginas/Acesso";
import Vitrine from "./paginas/Vitrine";
import CriarUsuario from "./paginas/CriarUsuario";
import CriarAlimento from "./paginas/CriarAlimento";
import AlteraAlimento from "./paginas/AlteraAlimento";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acesso />} />
          <Route path="/login" element={<Acesso />} />
          <Route path="/home" element={<Vitrine />} />
          <Route path="/novato" element={<CriarUsuario />} />
          <Route path="/produto/cadastro" element={<CriarAlimento />} />
          <Route path="/produto/ajuste/:id" element={<AlteraAlimento />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
