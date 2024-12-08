// import React from 'react';
// import Image from 'next/image';

// export default function Hero () {
//   return (
//     <div className="flex flex-col lg:flex-row font-IntegralCF justify-between items-center mx-auto text-black relative bg-[#F2F0F1] w-full lg:h-[663px] gap-8 px-6 lg:px-12">
//       {/* Text Section
//       <div className="lg:w-1/2 flex flex-col justify-start items-start gap-6">
//         <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] font-bold leading-snug text-left tracking-tight">
//           FIND CLOTHES THAT MATCHES YOUR STYLE
//         </h1>
//         <p className="text-sm sm:text-base md:text-lg text-black/60 leading-relaxed tracking-tight">
//           Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//         </p>
//         {/* Button */}
//         {/* <button className="bg-black text-white text-sm sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full">
//           Shop Now
//         </button> */} 
//         <div className="lg:hidden flex flex-col items-center gap-4 mt-8">
       
//           <div className="flex justify-center items-center gap-4">
//             <img src='img.jpg' alt='home-img' className='w-85 h-96 p-7'/> 
//             <Image
//               src="/Frame 1.png"
//               alt="Frame 55"
//               layout="intrinsic"
//               width={80}
//               height={36}
//               className="object-contain"
//             />
//           </div>
//           <Image
//             src="/Frame 56.png"
//             alt="Frame 56"
//             layout="intrinsic"
//             width={80}
//             height={36}
//             className="object-contain"
//           />
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="lg:w-1/2 w-full h-full relative">
//         {/* Left-Center Vector */}
//         <div className="absolute left-[60px] top-[260px] transform -translate-y-1/2 z-10">
//           <Image
//             src="/Vector (3).png"
//             alt="Vector Image Left-Center"
//             layout="intrinsic"
//             width={40}
//             height={40}
//             className="object-contain"
//           />
//         </div>

//         {/* Right-Top Vector */}
//         <div className="absolute right-8 top-10 z-10">
//           <Image
//             src="/Vector (3).png"
//             alt="Vector Image Right-Top"
//             layout="intrinsic"
//             width={80}
//             height={80}
//             className="object-contain"
//           />
//         </div>

//         {/* Main Hero Image */}
//         <div className="relative w-full h-64 sm:h-80 lg:h-full">
//           <Image
//             src="/for-mobile.png"
//             alt="Hero Image"
//             layout="fill"
//             objectFit="contain"
//             className="object-center"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">

      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

        <section className="max-w-frame px-4 ">
          <h2 className= "text-5xl lg:text-[50px] lg:leading-[50px] mb-5 lg:mb-8 pl-8">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
        
          <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <div>
            <button className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full">
              Shop Now
            </button>
          </div>
          <div className='  pl-18 justify-end  items-end mr-auto md:max-w-frame mx-auto  flex flex-cols-1 md:flex-cols-2 lg:flex-cols-2  '>
                    <img src='../img.jpg' alt="hero" className="justify-end ml-auto">
                    </img>
                </div>
        
            <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                200+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <div className="ml-6 md:ml-0 h-12 md:h-full bg-black/10"  />
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                2000+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <div className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10" />
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                30,000+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
            </span>
            </div>
          </div>
        </section>
        <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          <Image
           
            src="/vector-img.jpg"
            height={56}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
          />
          <Image
        
            src="/Vector2.jpg"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]"
          />
        </section>
      </div>
    </header>
  );
};

export default Header;