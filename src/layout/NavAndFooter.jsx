import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

const NavAndFooter = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer /> 
    </div>
  );
};

export default NavAndFooter;
