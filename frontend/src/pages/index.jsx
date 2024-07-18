import Navbar from "../../components/home/NavBar";
import Catalogo from "../../components/home/Catalogo";
import Header from "../../components/home/HeaderVendedor";

export default function index({ products }) {

    return (
      <>
        <Header/>
        <Navbar />
        <Catalogo products={products} />  
        <Footer/>
      </>
    );
}
