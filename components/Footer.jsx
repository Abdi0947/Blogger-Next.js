import {assets}  from '@/Assets/Assets/assets';
import Image from 'next/image';
import React from 'react';



const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black p-6'>
     
      <Image
        src={assets.logo_light}
        alt="Company Logo"
        width={120}  // Specify width
        height={80}  // Specify height proportional to width
        />
      <p className='text-sm text-white'> All Rights Reserved. © 2024</p>
      <div className='flex'>
        
        <Image src={assets.facebook_icon} alt='Social Media Icon' width={40} />
        
        <Image src={assets.twitter_icon} alt='Social Media Icon' width={40}  />
        
        <Image src={assets.googleplus_icon} alt='Social Media Icon' width={40}  />
        
        
      </div>
    </div>
  );
};

export default Footer;
