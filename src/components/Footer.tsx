import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#5a3e2b] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 - Services */}
          <div>
            <h2 className="text-2xl font-serif mb-6">SA Interior</h2>

            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Residential Design</li>
              <li>Commercial Interiors</li>
              <li>Luxury Spaces</li>
              <li>Space Planning</li>
              <li>3D Visualization</li>
              <li>Interior Renovation</li>
            </ul>
          </div>

          {/* Column 2 - Get in Touch */}
          <div>
            <h4 className="font-medium mb-6">Get in touch</h4>

            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="mb-1">Email Support</p>
                <p className="text-white">hello@domain.tld</p>
              </div>

              <div>
                <p className="mb-1">Customer Support</p>
                <p className="text-white">(888) 4000-2424</p>
              </div>
            </div>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h4 className="font-medium mb-6">Newsletter</h4>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Signup our newsletter to get update information, news, insight or promotions.
            </p>

            <div className="flex items-center gap-4">
              <input
                type="email"
                placeholder="EMAIL"
                className="px-4 py-2 bg-transparent border border-white/40 text-white text-sm outline-none w-full"
              />
              <button className="px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-[#5a3e2b] transition">
                SIGN UP →
              </button>
            </div>

            <p className="text-xs text-white/60 mt-4">
              By subscribing, you accepted the our Privacy Policy
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex items-center justify-center border border-white/40 rounded-full">
              <Facebook size={16} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center border border-white/40 rounded-full">
              <Instagram size={16} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center border border-white/40 rounded-full">
              <Twitter size={16} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center border border-white/40 rounded-full">
              <Youtube size={16} />
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/70 text-center">
            Copyright © 2026 Dafroma. All rights reserved. Powered by MoxCreative.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;