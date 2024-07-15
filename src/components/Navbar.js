// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="section--light  p-4 flex justify-end items-end">
      <button
        className="md:hidden sidebar-button text-dark focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-end">
          <div className="section--brown w-full h-full p-6 text-white relative">
            <button
              className="absolute top-4 right-4 text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <nav className="flex flex-col space-y-4 mt-8 items-center justify-center">
              <Link href="/" className="text-5xl font-semibold hover:underline">Home</Link>
              <Link href="/sahih" className="text-5xl font-semibold hover:underline">The Ṣaḥīḥ</Link>
              <Link href="/biography" className="text-5xl font-semibold hover:underline">Biography</Link>
              <Link href="/manuscripts" className="text-5xl font-semibold hover:underline">Manuscripts</Link>
              <Link href="/blog" className="text-5xl font-semibold hover:underline">Blog</Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
