// import Categoria from './pages/fase1/categoria';
import Footer from '../../layout/footer';
import Navbar from '../../layout/navbar';
import Categorias from '../../layout/categoria';
import Generos from '../../layout/generos';
import Podcast from '../../layout/podcast';
// import ResponsiveCategoria from '../../layout/ResponsiveCategoria';
// import ResponsiveGenero from '../../layout/ResponsiveGenero';
// import ResponsivePodcast from '../../layout/ResponsivePodcast';
// import MusicPlayerResponsive from '../../layout/categoria';
import MusicPlayer from '../../layout/BlocoMusica';
import MgTopFooter from '../../layout/mgTopFooter';


export default function MusicaCategoria() {
  return (
    <>
    <Navbar />
    <Categorias/>
    <Generos/>
    <Podcast/>
    {/* <ResponsiveCategoria/>
    <ResponsiveGenero/>
    <ResponsivePodcast/>
    <MusicPlayerResponsive/> */}
    <MusicPlayer/>
    <MgTopFooter />
    <Footer/>

    </>
  );
}


