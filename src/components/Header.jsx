import { useEffect, useState } from 'react';
import { ChevronDown, Menu, SearchIcon, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen,setAboutOpen]=useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest('.about-dropdown') &&
        !e.target.closest('.about-button')
      ) {
        setAboutOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#3A5451] text-white sticky top-0 shadow-2xl z-50 w-full">
      <div className=" mx-auto w-full max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo area */}
        <NavLink to="/home" className="flex items-center gap-2">
          <img src="/newLifes.png" alt="newlife" className="h-13" />
          <span className="text-xl font-medium font-['muli']">New Life</span>
        </NavLink>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center text-sm ">
          <NavLink to="/programs" className="hover:underline">Programs</NavLink>
          <div onClick={() => setAboutOpen(!aboutOpen)} className="relative flex items-center gap-2 about-dropdown">
            <button
              className="hover:underline focus:outline-none about-button"
            >
              About 
            </button>
            <ChevronDown className={`transition-transform duration-300 size-4 ${aboutOpen ? "rotate-180" : ""}`} />
            {aboutOpen && (
              <div className=" absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 bg-white text-[#3A5451] shadow-lg rounded-md z-50 py-4">
               <div className="w-full flex items-center flex-col gap-4">
               <NavLink to="/about" className=" hover:underline">
                  Meet the Team
                </NavLink>
                <NavLink to="/about/amenities" className=" hover:underline">
                  Amenities
                </NavLink>
               </div>
              </div>
            )}
          </div>
          <NavLink to="/why" className="hover:underline">What to Expect</NavLink>
          <NavLink to='/location' >Location</NavLink>
          <NavLink to="/faq" className="hover:underline">FAQs</NavLink>
          
          <button>
            <SearchIcon size={20}/>
          </button>
          <button className="bg-[#E7CB93] text-black px-4 py-2 rounded cursor-pointer">
          <NavLink to="/contact">Contact Us</NavLink>
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#3A5451] text-white px-4 pb-4 flex items-center justify-start flex-col gap-3">
           <NavLink to="/programs" className="hover:underline">Programs</NavLink>
          <NavLink to="/about" className="hover:underline">About</NavLink>
          <NavLink to="/why" className="hover:underline">What to Expect</NavLink>
          <NavLink to='/location' className="hover:underline" >Location</NavLink>
          <NavLink to="/faq" className="hover:underline">FAQs</NavLink>
          <button className="block text-left">
            <SearchIcon size={20} className="inline-block mr-2" />
            Search
          </button>
          <button onClick={()=>setMenuOpen(false)} className="bg-[#E7CB93] text-black w-full py-2 rounded">
           <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
           </button>
        </div>
      )}
    </header>
  );
}

