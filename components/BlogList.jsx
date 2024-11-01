'use client';
import { blog_data } from '@/Assets/Assets/assets';
import React, { useState } from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {
  // Define state for the current menu selection
  const [menu, setMenu] = useState('All');

  // Filter blog data based on the selected menu
  const filteredBlogs = blog_data.filter((item) =>
    menu === 'All' ? true : item.category === menu
  );

  return (
    <div>
      {/* Menu Buttons */}
      <div className='flex justify-center gap-6 my-10'>
        <button 
          onClick={() => setMenu('All')} 
          className={menu === 'All' ? 'bg-black text-white py-1 px-4 rounded sm' : ''}>
          All
        </button>
        <button 
          onClick={() => setMenu('Technology')} 
          className={menu === 'Technology' ? 'bg-black text-white py-1 px-4 rounded sm' : ''}>
          Technology
        </button>
        <button 
          onClick={() => setMenu('Startup')} 
          className={menu === 'Startup' ? 'bg-black text-white py-1 px-4 rounded sm' : ''}>
          Startup
        </button>
        <button 
          onClick={() => setMenu('Lifestyle')} 
          className={menu === 'Lifestyle' ? 'bg-black text-white py-1 px-4 rounded sm' : ''}>
          LifeStyle
        </button>
      </div>

      {/* Blog Items */}
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 '>
        {filteredBlogs.map((item, key) => (
          <BlogItem
            key={key}  // Add a unique key prop
            title={item.title}
            category={item.category}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
