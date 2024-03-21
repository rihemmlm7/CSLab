import { Navbar, TextInput, Button } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
     
      <div className="flex items-center space-x- "> {/* Adjust padding here */}
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1'>
            {/* Insert your logo image here */}
          </span>
          Blog
        </Link>
        <form className='flex items-center'>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
          />
          </form>
          <Button className='w-12 h-10 lg:hidden ml-2' color='gray' pill>
            <AiOutlineSearch />
          </Button>
          <div className=' rounded-full'>
          <Button className='w-12 h-10 hidden sm:inline ' color='gray' pill>
            <FaMoon />
          </Button>
        </div>
        
      </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
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
