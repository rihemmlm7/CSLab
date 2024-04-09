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
        
 <Link to='/' className='hidden lg:inline    '>
          
          <span className='px-2 py-1 bg-[#FF7000] rounded-lg text-white'>CSLab</span>
        </Link>
      
        <div className='flex gap-2 md:order-1 hidden lg:inline'>
  <Link to='/Log-in'>
    <button className="border-[#FF7000] text-[#FF7000] font-semibold rounded-3xl w-[85px] h-8 border-solid border-[1.5px] border-[#FF7000] ">
      Log in
    </button>
  </Link>
</div>

      <div className='flex gap-2 md:order-1 hidden lg:inline'>
        
         
        <Link to='/Sign-up'>
            <button class='bg-[#FF7000] w-[85px] h-8 text-white font-mono rounded-3xl'>
              Sign-up
            </button>
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
