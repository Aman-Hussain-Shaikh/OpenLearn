'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { assets } from "@/Assets/assets";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const getMenuFromPath = (path) => {
    switch (path) {
      case '/':
        return 'All';
      case '/technology':
        return 'Technology';
      case '/startup':
        return 'Startup';
      case '/marketing':
        return 'Marketing';
      case '/law':
        return 'Law';
      case '/education':
        return 'Education and Learning';
      case '/science':
        return 'Science';
      case '/lifestyle':
        return 'Lifestyle';
      default:
        return 'All';
    }
  };

  const menu = getMenuFromPath(pathname);

  const onSearchHandler = (event) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
  };


  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
        <button className='flex items-center gap-2 font-medium py-1 sm:py-3 px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'> Get Started <Image src={assets.arrow} alt="arrow" /></button>
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl'>Open Learn</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Dive into a world of knowledge with Open Learn! Whether you&apos;re into tech, startups, marketing, or just curious about the latest trends, our platform offers bite-sized, easy-to-digest content. Get started on your learning journey today and make mastering new skills fun and exciting! 🚀📚</p>

        <form onSubmit={onSearchHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="text"
            name="search"
            placeholder='Search...'
            className='pl-4 outline-none'
          />
          <button
            type="submit"
            className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>
            Search
          </button>
        </form>
      </div>

      <div className='flex justify-center gap-6 mt-10'>
        <Link href="/" passHref>
          <button className={menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
            All
          </button>
        </Link>
        <Link href="/technology" passHref>
          <button className={menu === 'Technology' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
            Technology
          </button>
        </Link>
        <Link href="/startup" passHref>
          <button className={menu === 'Startup' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
            Startup
          </button>
        </Link>
        <Link href="/marketing" passHref>
          <button className={menu === 'Marketing' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
            Marketing
          </button>
        </Link>
        <Link href="/law" passHref>
          <button className={menu === 'Law' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
            Law
          </button>
        </Link>
        <Link href="/education" passHref>
          <button className={menu === 'Education and Learning' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
            Education and Learning
          </button>
        </Link>
        <Link href="/science" passHref>
          <button className={menu === 'Science' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
            Science
          </button>
        </Link>
        <Link href="/lifestyle" passHref>
          <button className={menu === 'Lifestyle' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
            Lifestyle
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
