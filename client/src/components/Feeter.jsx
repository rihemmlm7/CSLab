import React from 'react';
import { Footer, FooterLink, FooterLinkGroup, FooterTitle, FooterIcon, FooterDivider, FooterCopyright, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { MDBInput, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

export default function Feeter() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-[#FF7000] rounded-lg text-white'>
                CSLab
              </span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <FooterTitle title='About' />
              <FooterLinkGroup col>
                <FooterLink
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  100 JS Projects
                </FooterLink>
                <FooterLink
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CSLab
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title='Follow us' />
              <FooterLinkGroup col>
                <FooterLink
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </FooterLink>
                <FooterLink href='#' target='_blank' rel='noopener noreferrer'>
                  Facebook
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title='Legal' />
              <FooterLinkGroup col>
                <FooterLink href='#'>Privacy Policy</FooterLink>
                <FooterLink href='#'>Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
            
          
          </div>
           {/* Email input and subscribe button */}
          <MDBCol md='5' size='12' className='flex space-x-4 mb-4 mb-md-0'>
            <MDBInput
            
              type='email'
              id='emailInput'
              placeholder='Email address'
              className='border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-teal-500'
            />
            <Button className='bg-teal-500 hover:bg-teal-600 text-white  rounded-3xl w-25 h-10'>Subscribe</Button>
          </MDBCol>
          
            
         
        </div>
        <FooterDivider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <FooterCopyright
            href='#'
            by='CSLab'
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <FooterIcon href='#' icon={BsFacebook} />
            <FooterIcon href='#' icon={BsInstagram} />
            <FooterIcon href='#' icon={BsTwitter} />
            <FooterIcon href='#' icon={BsLinkedin} />
          </div>
         
        </div>
      </div>
    </Footer>
  );
}
