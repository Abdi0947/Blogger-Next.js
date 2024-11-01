import { assets } from '@/Assets/Assets/assets';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Use Next.js Link for navigation

const BlogItem = ({ image, category, title, description }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000] transition-shadow duration-300 ease-in-out">
      <Image 
        src={image} 
        alt="Blog Image" 
        width={400} 
        height={400} 
        className="border-b border-black"
        layout="responsive" // Optional for responsive behavior
      />
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>

      <div className='p-5'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
        
        <Link href="/path-to-full-blog-post"> {/* Link to actual blog */}
          <div className='inline-flex items-center py-2 font-semibold text-center cursor-pointer hover:underline'>
              ReadMore
              <Image src={assets.arrow} alt='Arrow Icon' width={12} className='ml-2'/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
