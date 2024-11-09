

const NavItem = ({ href, label }) => {
  return (
    <li className="bg-[#996110] rounded-full shadow-md px-10 py-2">
      <a href={href} className="text-white hover:text-blue-200">
        {label}
      </a>
    </li>
  );
};

export default NavItem;
