
import NavItem from './NavItem'; // Asegúrate de que la ruta sea correcta

const NavList = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/product', label: 'Product' },
    { href: '/order', label: 'Order' },
  ];

  return (
    <ul className="flex pt-4 space-x-36 ">
      {links.map((link) => (
        <NavItem key={link.href} href={link.href} label={link.label} />
      ))}
    </ul>
  );
};

export default NavList;
