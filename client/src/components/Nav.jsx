import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaFacebook, FaWhatsapp, FaLinkedin, FaGlobe, FaAngleDown ,FaSun} from 'react-icons/fa';
import { Navbar, TextInput, Button } from 'flowbite-react';
import { MdPhone } from 'react-icons/md';
import { useLanguage } from '../LanguageContext'; // Import the useLanguage hook
import { toggleTheme } from '../redux/theme/themeSlice';
import { useSelector, useDispatch } from 'react-redux';
import './custom-styles.css';

export default function Nav() {
  const { language, changeLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(language);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleChangeLanguage = (lang) => {
    setSelectedLanguage(lang);
    changeLanguage(lang);
    // Additional logic to change language across the website if necessary
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar className='border-b-2'>
      <div className="flex justify-between items-center gap-[465px]">
        {/* Left group */}
        <div className="flex items-center hidden lg:flex">
          {/* Phone number with icon */}
          <Link to="/phone"><MdPhone className="text-[#FF7000] " /></Link>
          <Link to='/' className="text-sm">+123-0759351380</Link>
      
          <div className="w-4 h-4 border-l-2 border-[#FF7000] mx-1"></div>
          {/* Icons with links */}
          <Link to="/facebook"><FaFacebook className="text-[#FF7000] mx-1" /></Link>
          <Link to="/whatsapp"><FaWhatsapp className="text-[#FF7000] mx-1" /></Link>
          <Link to="/linkedin"><FaLinkedin className="text-[#FF7000] mx-1" /></Link>
        </div>
        {/* Empty space */}
        
        {/* Right group */}
        <div className="flex items-center space-x-1 ">
       
          <form className='flex items-center'>
            <TextInput
              type='text'
              placeholder='Search...'
              rightIcon={AiOutlineSearch}
              className='hidden lg:inline'
              class='px-6 py-1 placeholder-gray-500 text-black rounded-3xl text-[13px]'
            />
          </form>
          <Button className='w-12 h-10 lg:hidden ml-2' color='gray'>
            <AiOutlineSearch />
          </Button>
          <Button
          
          className='w-12 h-10 hidden sm:inline border-none '
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
          </Button>   {/* Language selector button */}
          <div className="relative">
            <div className="relative inline-block text-left">
              <Button className='w-14 h-10 border-none ' 
              color='gray' 
              pill 
              onClick={toggleDropdown}
               style={{ outline: 'none' }}>
                <FaGlobe />
                <span className="ml-1">{selectedLanguage.slice(0, 2)}</span> {/* Add space with ml-1 class */}
                <FaAngleDown className="w-4 h-4 pt-1" />
              </Button>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-lg rounded-md py-1 mt-2">
                  <li><button onClick={() => handleChangeLanguage('Arabic')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none">Arabic</button></li>
                  <li><button onClick={() => handleChangeLanguage('French')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none">French</button></li>
                  <li><button onClick={() => handleChangeLanguage('English')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none">English</button></li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

