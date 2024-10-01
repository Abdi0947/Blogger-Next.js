import { assets } from "@/Assets/Assets/assets";
import React from "react";
import Image from "next/image";
import { Input } from "postcss";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get started
          <Image src={assets.arrow} alt="Arrow" />
        </button>{" "}
      </div>
      <div class="text-center my-8">
    <h1 class="text-3xl font-bold">Latest Blog</h1>
    <p class="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, cupiditate fugit? Quibusdam iusto similique dolorum repudiandae totam praesentium! Ipsa accusamus commodi excepturi distinctio quod delectus nam voluptate vitae alias quae!</p>
    <form class="mt-4 w-1/2 shadow-[-7px_7px_0px_#000000] mx-auto">
    <div class="flex items-center justify-center">
       <input type="email" class="border border-gray-300 p-5 rounded flex-grow" placeholder="Enter Email" />
       <button class="bg-white hover:bg-blue-700 hover:text-white sm:py-5 sm:px-6 border border-solid  border-black  text-black font-bold py-2 px-4 rounded" type="submit">Subscribe</button>
  </div>
</form>
</div>
    </div>
  );
};

export default Header;
