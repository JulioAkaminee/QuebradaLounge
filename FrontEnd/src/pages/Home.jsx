import Header from "../componentes/header/header.js";
import Footer from "../componentes/footer/footer.js";
import BarraCategoriaProdutos from "../componentes/categoriasProdutos/barraCategoriaProdutos.jsx";
import SimpleSlider from "../componentes/slider/slider.jsx";
import '../pages/pagesCSS/home.css'

function Home() {
  return (
    <>
   
    <Header textoInput="Pesquisar..." />
    <SimpleSlider/>
    
 
    <Footer/>
    </>
    
  );
}

export default Home;
