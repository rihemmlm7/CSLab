import { Navbar, TextInput, Button } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;

  return (
    
    <Navbar className=''>
      
        
      <Link to='/' className='lg:hidden'>
          <span>CSLab</span>
          
        </Link>
        
 <Link to='/' className='hidden sm:inline    '>
          
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>CSLab</span>
        </Link>
      
      
      <div className='flex gap-2 md:order-2 hidden lg:inline'>
        
         
        <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
          
      </div>

        
        <Navbar.Toggle />
        <Navbar.Collapse className=''>
        
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/Contact'} as={'div'}>
            <Link to='/Contact'>Contact</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/About'} as={'div'}>
            <Link to='/About'>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/Dashboard'} as={'div'}>
            <Link to='/Dashboard'>Dashboard</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/Members'} as={'div'}>
            <Link to='/Members'>Members</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/News'} as={'div'}>
            <Link to='/News'>News</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/Projects'} as={'div'}>
            <Link to='/Projects'>Projects</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/Publications'} as={'div'}>
            <Link to='/Publications'>Publications</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/Research'} as={'div'}>
            <Link to='/Research'>Researchs</Link>
          </Navbar.Link>
          
          
        </Navbar.Collapse>

      
      
      
    </Navbar>

  );
}
