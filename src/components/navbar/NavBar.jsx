
import NavList from './NavList'; // Asegúrate de que la ruta sea correcta

export const NavBar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-center">
        <NavList />
      </div>
    </nav>
  );
};

export default NavBar;
