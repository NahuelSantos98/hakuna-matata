import React from 'react';

const NavBar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-4">
          {[
            { href: '/', label: 'Home' },
            { href: '/product', label: 'Product' },
            { href: '/order', label: 'Order' },
          ].map((link) => (
            <li key={link.href} className="bg-[#996110] rounded-full p-2">
              <a href={link.href} className="text-white hover:text-blue-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
