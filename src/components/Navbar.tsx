import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <h1 className="text-2xl font-bold tracking-wide">
            SA Interiors
          </h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm relative">

            <Link to="/home_interior" className="hover:text-black transition">
              Home Interiors
            </Link>

            <Link to="/kitchen-wardrobe" className="hover:text-black transition">
              Kitchen & Wardrobe
            </Link>

            {/* COMMERCIAL */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-black">
                Commercial <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 pt-3 w-64 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 text-gray-600">
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Restaurants & Food Courts</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Resorts & Hotels</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Schools & Play Space Interiors</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Office Interiors</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Events & Banquets</Link>
                </div>
              </div>
            </div>

            <Link to="/portfolio" className="hover:text-black transition">
              Portfolio
            </Link>

            {/* PRODUCTS */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-black">
                Products <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 pt-3 w-64 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 text-gray-600">
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Civil, Electrical & Plumbing</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">False Ceiling</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Painting</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Flooring</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Custom Furnitures</Link>
                </div>
              </div>
            </div>

            {/* COMPANY */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-black">
                Our Company <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 pt-3 w-56 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 text-gray-600">
                  <Link to="/about" className="hover:text-black hover:pl-1 transition-all">About</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Manufacturing</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Testimonial</Link>
                  <Link to="/" className="hover:text-black hover:pl-1 transition-all">Blog</Link>
                  <Link to="/contact" className="hover:text-black hover:pl-1 transition-all">Contact</Link>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition"
            >
              <Phone size={16} />
              Get Quote
            </Link>

          </nav>

          {/* MOBILE BUTTON */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div className={`fixed md:hidden top-0 right-0 h-full w-[320px] bg-white z-50 transform transition-transform duration-300 shadow-2xl ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* HEADER */}
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col gap-5 text-sm">

          <Link to="/home_interior" onClick={() => setMenuOpen(false)}>Home Interiors</Link>
          <Link to="/kitchen-wardrobe" onClick={() => setMenuOpen(false)}>Kitchen & Wardrobe</Link>

          {/* COMMERCIAL MOBILE */}
          <div>
            <button onClick={() => setCommercialOpen(!commercialOpen)} className="flex justify-between w-full">
              Commercial
              <ChevronDown className={`${commercialOpen ? "rotate-180" : ""}`} />
            </button>
            {commercialOpen && (
              <div className="ml-4 mt-3 flex flex-col gap-3 text-gray-600">
                <Link to="/">Restaurants & Food Courts</Link>
                <Link to="/">Resorts & Hotels</Link>
                <Link to="/">Schools & Play Space Interiors</Link>
                <Link to="/">Office Interiors</Link>
                <Link to="/">Events & Banquets</Link>
              </div>
            )}
          </div>

          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>

          {/* PRODUCTS MOBILE */}
          <div>
            <button onClick={() => setProductsOpen(!productsOpen)} className="flex justify-between w-full">
              Products
              <ChevronDown className={`${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="ml-4 mt-3 flex flex-col gap-3 text-gray-600">
                <Link to="/">Civil, Electrical & Plumbing</Link>
                <Link to="/">False Ceiling</Link>
                <Link to="/">Painting</Link>
                <Link to="/">Flooring</Link>
                <Link to="/">Custom Furnitures</Link>
              </div>
            )}
          </div>

          {/* COMPANY MOBILE */}
          <div>
            <button onClick={() => setCompanyOpen(!companyOpen)} className="flex justify-between w-full">
              Our Company
              <ChevronDown className={`${companyOpen ? "rotate-180" : ""}`} />
            </button>
            {companyOpen && (
              <div className="ml-4 mt-3 flex flex-col gap-3 text-gray-600">
                <Link to="/about">About</Link>
                <Link to="/">Manufacturing</Link>
                <Link to="/">Testimonial</Link>
                <Link to="/">Blog</Link>
                <Link to="/contact">Contact</Link>
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 bg-black text-white py-3 rounded-full flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            GET QUOTE
          </Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;