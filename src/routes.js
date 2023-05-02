import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Inicio from "./Paginas/Paginas/Inicio";
import SobreMim from "./Paginas/Paginas/SobreMim";
import Rodape from "Componentes/Menu/Rodape";
import PaginaPadrao from "Componentes/Menu/PaginaPadrao";
import Post from "Paginas/Paginas/Post";
import NaoEncontrada from "Paginas/Paginas/NaoEncontrada";
import ScrollToTop from "Componentes/Menu/ScrollToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
          <Route index element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )


}

export default AppRoutes;
