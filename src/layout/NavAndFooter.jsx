import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

const NavAndFooter = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen"> {/* Asegura que toda la página ocupe el 100% de la altura */}
      <NavBar />
      <div className="flex-grow"> {/* El contenido se expande para llenar el espacio disponible */}
        {children}
      </div>
      <Footer /> {/* El footer se posicionará al final */}
    </div>
  );
};

export default NavAndFooter;
