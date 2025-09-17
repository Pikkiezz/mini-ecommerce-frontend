'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative bg-gradient-to-r from-stone-100 via-amber-50 to-stone-200 h-20 shadow-lg overflow-hidden border-b border-stone-200">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-3 h-3 bg-stone-300 rounded-full animate-bounce"></div>
        <div className="absolute top-4 right-20 w-2 h-2 bg-amber-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-1/4 w-4 h-4 bg-stone-200 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-6 right-1/3 w-2 h-2 bg-amber-300 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-4xl mr-3">☕</div>
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-stone-700 to-amber-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 font-fredoka">
              Pikkuri
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className={`px-4 py-2 text-sm font-bold transition-all duration-300 hover:scale-110 rounded-full font-quicksand ${
                pathname === '/' 
                  ? 'text-white bg-gradient-to-r from-stone-600 to-amber-600 shadow-lg' 
                  : 'text-stone-700 hover:text-stone-600 bg-stone-200/50'
              }`}
            >
              🏠 HOME
            </Link>
            <Link 
              href="/menu" 
              className={`px-4 py-2 text-sm font-bold transition-all duration-300 hover:scale-110 rounded-full font-quicksand ${
                pathname === '/menu' 
                  ? 'text-white bg-gradient-to-r from-stone-600 to-amber-600 shadow-lg' 
                  : 'text-stone-700 hover:text-stone-600 bg-stone-200/50'
              }`}
            >
              🥐 MENU
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-2 text-sm font-bold transition-all duration-300 hover:scale-110 rounded-full font-quicksand ${
                pathname === '/about' 
                  ? 'text-white bg-gradient-to-r from-stone-600 to-amber-600 shadow-lg' 
                  : 'text-stone-700 hover:text-stone-600 bg-stone-200/50'
              }`}
            >
              📖 OUR STORY
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 text-sm font-bold transition-all duration-300 hover:scale-110 rounded-full font-quicksand ${
                pathname === '/contact' 
                  ? 'text-white bg-gradient-to-r from-stone-600 to-amber-600 shadow-lg' 
                  : 'text-stone-700 hover:text-stone-600 bg-stone-200/50'
              }`}
            >
              📞 CONTACT
            </Link>
          </nav>

          {/* Right side - Cart */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search bakery items..."
                  className="w-68 pl-10 pr-4 py-2 border-2 border-stone-300 rounded-full focus:ring-2 focus:ring-stone-400 focus:border-stone-500 bg-stone-100/50 backdrop-blur-sm text-stone-700 placeholder-stone-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cart */}
            <button className="relative p-3 text-stone-700 hover:text-stone-600 bg-stone-200/50 rounded-full hover:bg-stone-200/70 transition-all duration-300 hover:scale-110">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-stone-600 to-amber-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-stone-700 hover:text-stone-600 bg-stone-200/50 rounded-full hover:bg-stone-200/70 transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-stone-50/90 backdrop-blur-sm rounded-2xl mt-2 shadow-lg">
              <Link 
                href="/" 
                className={`block px-4 py-3 text-base font-bold transition-colors rounded-xl ${
                  pathname === '/' 
                    ? 'text-white bg-gradient-to-r from-stone-600 to-amber-600 shadow-lg' 
                    : 'text-stone-700 hover:text-stone-600 hover:bg-stone-100'
                }`}
              >
                🏠 HOME
              </Link>
              <Link 
                href="/menu" 
                className={`block px-4 py-3 text-base font-bold transition-colors rounded-xl ${
                  pathname === '/menu' 
                    ? 'text-white bg-gradient-to-r from-stone-600 to-amber-600 shadow-lg' 
                    : 'text-stone-700 hover:text-stone-600 hover:bg-stone-100'
                }`}
              >
                🥐 MENU
              </Link>
              <Link 
                href="/about" 
                className={`block px-4 py-3 text-base font-bold transition-colors rounded-xl ${
                  pathname === '/about' 
                    ? 'text-white bg-gradient-to-r from-stone-600 to-amber-600 shadow-lg' 
                    : 'text-stone-700 hover:text-stone-600 hover:bg-stone-100'
                }`}
              >
                📖 OUR STORY
              </Link>
              <Link 
                href="/contact" 
                className={`block px-4 py-3 text-base font-bold transition-colors rounded-xl ${
                  pathname === '/contact' 
                    ? 'text-white bg-gradient-to-r from-stone-600 to-amber-600 shadow-lg' 
                    : 'text-stone-700 hover:text-stone-600 hover:bg-stone-100'
                }`}
              >
                📞 CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
