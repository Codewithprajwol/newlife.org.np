import { useEffect, useState } from 'react';
import { ChevronDown, Menu, SearchIcon, X } from 'lucide-react';
import { Link, NavLink} from 'react-router-dom';
import SearchModal from '../Modals/SearchModal';

export default function Header() {
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen,setAboutOpen]=useState(false);
  const [programsOpen,setProgramsOpen]=useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest('.about-dropdown') &&
        !e.target.closest('.about-button')
      ) {
        setAboutOpen(false);
      }
      if (
        !e.target.closest('.programs-dropdown') &&
        !e.target.closest('.programs-button')&&
        !e.target.closest('.programs-content')

      ) {
        setProgramsOpen(false);
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

          {/* Programs part */}
          <div
  className='relative flex items-center gap-1 programs-dropdown cursor-pointer'
  onClick={() => setProgramsOpen(!programsOpen)}
>
  <button className="hover:underline focus:outline-none programs-button cursor-pointer">
    <Link to="/programs">Programs</Link>
  </button>
  <ChevronDown className={`transition-transform duration-300 size-4 ${programsOpen ? "rotate-180" : ""}`} />
</div>
<div
  className={`programs-content absolute top-full left-0 bg-dropdown w-full overflow-hidden transition-all duration-[700ms] ease-in-out ${
    programsOpen ? 'opacity-100' : 'h-0 opacity-0'
  }`}
  onClick={e => e.stopPropagation()}
>
  <div className="flex justify-around p-6 text-sm text-gray-700">
    {/* Column 1 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">Substance Abuse & Addiction</h3>
      <ul className="space-y-1">
        <li className="hover:underline cursor-pointer"><NavLink to="/treatment/alcohol" onClick={()=>setProgramsOpen(false)}>Alcohol</NavLink> <span className="text-yellow-400">›</span></li>
        <li className="hover:underline cursor-pointer"><NavLink to="/treatment/illicitDrugs" onClick={()=>setProgramsOpen(false)}>Illicit Drugs</NavLink> <span className="text-yellow-400">›</span></li>
        <li className="hover:underline cursor-pointer"><NavLink to="/treatment/gambling" onClick={()=>setProgramsOpen(false)}>Gambling</NavLink> <span className="text-yellow-400">›</span></li>
      </ul>
    </div>

    {/* Column 2 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">Mental Health</h3>
      <ul className="space-y-1">
        <li className="hover:underline cursor-pointer"><NavLink to='/treatment/depression' onClick={()=>setProgramsOpen(false)}>Depression</NavLink> <span className="text-yellow-400">›</span></li>
        <li className="hover:underline cursor-pointer"><NavLink to='/treatment/anxiety' onClick={()=>setProgramsOpen(false)}>Anxiety</NavLink> <span className="text-yellow-400">›</span></li>
        <li className="hover:underline cursor-pointer"><NavLink to='/treatment/ocd' onClick={()=>setProgramsOpen(false)}>OCD</NavLink> <span className="text-yellow-400">›</span></li>
        <li className="hover:underline cursor-pointer"><NavLink to='/treatment/bipolar' onClick={()=>setProgramsOpen(false)}>Bipolar Disorder</NavLink> <span className="text-yellow-400">›</span></li>
        <li className="hover:underline cursor-pointer"><NavLink to="/treatment/eatingDisorders" onClick={()=>setProgramsOpen(false)}>Eating Disorders</NavLink> <span className="text-yellow-400">›</span></li>
        <li className="hover:underline cursor-pointer"><NavLink to="/treatment/failure" onClick={()=>setProgramsOpen(false)}>Failure</NavLink> <span className="text-yellow-400">›</span></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-2"> Trauma & Grief</h3>
      <ul className="space-y-1">
        <li className="hover:underline cursor-pointer"><NavLink to="/treatment/trauma" onClick={()=>setProgramsOpen(false)}>Trauma</NavLink> <span className="text-yellow-400">›</span></li>
        <li className="hover:underline cursor-pointer"><NavLink to="/treatment/lossOfFamilyMembers" onClick={()=>setProgramsOpen(false)}>Loss of Family Members</NavLink> <span className="text-yellow-400">›</span></li>
        <li className="hover:underline cursor-pointer"><NavLink to="/treatment/relationshipBreakups" onClick={()=>setProgramsOpen(false)}>Relationship Breakups</NavLink> <span className="text-yellow-400">›</span></li>
      </ul>
    </div>
    {/* column 4 */}
     <div>
      <h3 className="font-semibold text-gray-800 mb-2">Lifestyle & Digital Wellness

</h3>
      <ul className="space-y-1">
        <li className="hover:underline cursor-pointer"><NavLink to="/treatment/digitalDetox" onClick={()=>setProgramsOpen(false)}>Digital Detox</NavLink> <span className="text-yellow-400">›</span></li>
      </ul>
    </div>
  </div>
</div>

          {/* About part */}
          <div   className="relative flex items-center gap-1 about-dropdown cursor-pointer">
            <Link to="/about"
              className="hover:underline focus:outline-none about-button cursor-pointer"
            >
              About 
            </Link>
            <ChevronDown onClick={() => setAboutOpen(!aboutOpen)} className={`transition-transform duration-300 size-4 ${aboutOpen ? "rotate-180" : ""}`} />
            
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 bg-white text-[#3A5451] shadow-lg rounded-md z-50  transition-all overflow-hidden duration-[700ms] ease-in-out ${aboutOpen? 'opacity-100 max-h-40 py-4' : 'opacity-0 max-h-0 py-0'}`}>
                <div onClick={()=>setAboutOpen(false)} className="w-full flex items-center flex-col gap-4">
                <NavLink to="/team" className=" hover:underline">
                    Meet the Team
                  </NavLink>
                  <NavLink to="/amenities" className=" hover:underline">
                    Amenities
                  </NavLink>
                </div>
                </div>
            
          </div>

          <NavLink to="/why" className="hover:underline">What to Expect</NavLink>
          <NavLink to='/location' className="hover:underline" >Location</NavLink>
          <NavLink to="/faq" className="hover:underline">FAQs</NavLink>
          
          <button className='cursor-pointer'>
            <SearchIcon onClick={()=>setIsModalOpen(true)} size={20}/>
          </button>
          <SearchModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
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

