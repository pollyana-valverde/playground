import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//fase1
import Planos from './pages/fase1/planos';
import MusicaCategoria from './pages/fase1/MusicaCategoria';
import Cadastro from "./pages/fase1/cadastro";
import Recursos from "./pages/fase1/recursos";

//fase2
import Artista from "./pages/fase2/artista";
import AlbumPage from "./pages/fase2/albumPage";
import IncialMusica from './pages/fase2/inicial';
import PerfilAccout from "./pages/fase2/perfilAccout";
import ExplorarMusica from "./pages/fase2/explorar";
import FeedNoticia from "./pages/fase2/feedNoticia";
import Favoritos from "./pages/fase2/favoritos";
import Playlist from "./pages/fase2/playlist";
// import Cabecalho from "./layout/navbar";


import './css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Planos />} />
          <Route path="/MusicaCategoria" element={<MusicaCategoria />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/cadastro" element={<Cadastro />} />

          
          <Route path="/inicial" element={<IncialMusica />} />
          <Route path="/artista" element={<Artista />} />
           <Route path="/albumPage" element={<AlbumPage />} />
          <Route path="/perfilAccout" element={<PerfilAccout />} />
          <Route path="/explorar" element={<ExplorarMusica />} />
          <Route path="/feedNoticia" element={<FeedNoticia />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/playlist" element={<Playlist />} />


        </Routes>
      </Router>
      {/* <IncialMusica /> */}

    </>
  );
}

export default App;
