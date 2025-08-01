import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
        <div className="text-xl font-bold text-blue-600">🏡 Topline Realty</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
