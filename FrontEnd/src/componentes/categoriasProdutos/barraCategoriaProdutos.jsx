import Header from "../../componentes/header/header.js";
import Footer from "../../componentes/footer/footer.js";
import '../categoriasProdutos/barraCategoriaProdutos.css'
import { Link } from "react-router-dom";

function BarraCategoriaProdutos() {
  return (
    <>

    <div className="sliderCategoriaProdutos">
   <Link className="produtoCategoria"> <img src="/assets/produtos/Cervejas/SKOL_269ML.png" alt="" /> <p>Cervejas</p>    </Link>
   <Link className="produtoCategoria"> <img src="/assets/produtos/Gelos/MELANCIA.png" alt="" />  <p>Gelo</p>    </Link>
   <Link className="produtoCategoria"> <img src="/assets/produtos/Energeticos/Bebida-Energetica-Red-Bull-250ml.png" alt="" />  <p>Energetico</p>   </Link>
   <Link className="produtoCategoria"> <img src="/assets/produtos/bebida/corote.png" alt="" />  <p>Cachaça</p>    </Link>
   <Link className="produtoCategoria"> <img src="/assets/produtos/Gin/tanqueray.png" alt="" /> <p>Gin</p>     </Link>
   <Link className="produtoCategoria"> <img src="/assets/produtos/Refrigerantes/itubaina350ml.png" alt="" /> <p>Refrigerantes</p>    </Link>
   <Link className="produtoCategoria"> <img src="/assets/produtos/Vodka/askov.png" alt="" /> <p>Vodka</p>    </Link>
   <Link className="produtoCategoria"> <img src="/assets/produtos/Whisky/jack-daniels.png" alt="" /> <p>Whisky</p>     </Link>
    </div>
    </>
  );
}

export default BarraCategoriaProdutos;
