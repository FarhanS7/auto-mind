const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <span className="text-xl font-bold text-black">AutoMind AI</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
              Experience the future of car shopping with our AI-powered platform
              that intelligently matches you with your perfect vehicle.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-black mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/cars"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Browse Cars
                </a>
              </li>
              <li>
                <a
                  href="/search"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Advanced Search
                </a>
              </li>
              <li>
                <a
                  href="/dealers"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Find Dealers
                </a>
              </li>
              <li>
                <a
                  href="/financing"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Car Financing
                </a>
              </li>
              <li>
                <a
                  href="/insurance"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Car Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-black mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/help"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Live Support
                </a>
              </li>
              <li>
                <a
                  href="/feedback"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-black mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Press Kit
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span>© 2025 AutoMind AI. All rights reserved.</span>
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="/privacy"
                  className="hover:text-black transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="/terms"
                  className="hover:text-black transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <span className="text-gray-400">|</span>
                <a
                  href="/cookies"
                  className="hover:text-black transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>Made with ❤️ for car enthusiasts</span>
            </div>
          </div>

          {/* Mobile Legal Links */}
          <div className="md:hidden flex flex-wrap justify-center items-center gap-4 mt-4 text-sm text-gray-600">
            <a
              href="/privacy"
              className="hover:text-black transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/terms"
              className="hover:text-black transition-colors duration-200"
            >
              Terms of Service
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/cookies"
              className="hover:text-black transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
