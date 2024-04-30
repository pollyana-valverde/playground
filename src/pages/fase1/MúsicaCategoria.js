// import Categoria from './pages/fase1/categoria';
// import Rodape from './layout/footer';
import Navbar from '../../layout/navbar';
import Categorias from '../../layout/categoria';
import Generos from '../../layout/generos';
import Podcast from '../../layout/podcast';
import ResponsiveCategoria from '../../layout/ResponsiveCategoria';
import ResponsiveGenero from '../../layout/ResponsiveGenero';
import ResponsivePodcast from '../../layout/ResponsivePodcast';
import MusicPlayerResponsive from '../../layout/categoria';
import MgBottom from '../../layout/mgBottom';
import MusicPlayer from '../../layout/BlocoMusica';


export default function MusicaCategoria() {
  return (
    <>
    <Navbar />
    <Categorias/>
    <Generos/>
    <Podcast/>
    <ResponsiveCategoria/>
    <ResponsiveGenero/>
    <ResponsivePodcast/>
    <MusicPlayerResponsive/>
    <MgBottom />
    <MusicPlayer/>
    {/* <Rodape/> */}
    </>
  );
}


