import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { Navbar, TextInput, Button } from 'flowbite-react';

export default function Nav() {
  const path = useLocation().pathname;

  return (

    <Navbar className='border-b-2 '>
         
      
      <div className="flex right-1 space-x-7  "> {/* Adjust padding here */}
        <form className='flex items-center '>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline '
          />
        </form>
        <Button className='w-12 h-10 lg:hidden ml-2' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        <div className='rounded-full'>
          <Button className='w-12 h-10 ' color='gray' pill>
            <FaMoon />
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
