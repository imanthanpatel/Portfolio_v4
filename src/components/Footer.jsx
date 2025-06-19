import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold">Manthan Patel</span>
            </div>
            <p className="text-gray-600 mb-4">
              Frontend Developer — passionate about clean UI and delightful UX.
              Open to freelance & full-time roles.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/imanthanpatel"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-800 hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/manthan._.2408?igsh=MWU0eHZ4ajd2anNreg=="
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-200 rounded-full hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/manthan-patel-43680b315/"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-200 rounded-full hover:bg-blue-700 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#terms">Terms of Use</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#works">How it Works</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Support Career</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="https://wa.me/9428841250"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>Support 24</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-300" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} Manthan Patel.</p>
          <p>
            Created By ~
            <a href="https://github.com/imanthanpatel">Manthan Patel</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
