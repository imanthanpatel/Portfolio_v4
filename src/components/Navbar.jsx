import { useState } from "react";
import { motion } from "framer-motion"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { fadeIn } from "../utils/motion";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Us" },
        { href: "#Services", label: "Our Services" },
        { href: "#testimonials", label: "Testimonials" },
    ];

    return (
        <motion.nav 
         variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
             id="navbar"
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">

                {/* Logo */}
                <div className="flex items-center gap-1 cursor-pointer">
                    <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                    <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                    {isMenuOpen ? (
                        <XMarkIcon className="w-6 h-6 text-gray-700" />
                    ) : (
                        <Bars3Icon className="w-6 h-6 text-gray-700" />
                    )}
                </button>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            onClick={() => setActiveLink(link.href)}
                            href={link.href}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                                activeLink === link.href
                                    ? "text-blue-600 after:w-full"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Get in Touch (Desktop Only) */}
                <a
                    href="https://wa.me/9428841250"
                    className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-700"
                >
                    Get in touch
                </a>
            </div>

            {/* Mobile Nav Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-4 pb-6 space-y-3 bg-white border-t border-gray-200">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            onClick={() => {
                                setActiveLink(link.href);
                                setIsMenuOpen(false); // Close menu after clicking
                            }}
                            href={link.href}
                            className={`block text-sm font-medium ${
                                activeLink === link.href
                                    ? "text-blue-600"
                                    : "text-gray-700 hover:text-blue-600"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#newsletter"
                        className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium transition-all"
                    >
                        Get in touch
                    </a>
                </div>
            )}
        </motion.nav>
    );
}

export default Navbar;
