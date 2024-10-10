import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-[#f7f7f7] pt-8'>
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4'>
         {/* section1 */}
         <div className='space-y-4 max-w-[300px] '>
            <h1 className='text-2xl font-bold'>FARRES</h1>
            <p className='text-dark2'>An e-learning platform is an online space for accessing courses and educational content. It offers flexibility, allowing users to learn at their own pace, track progress, and engage with interactive tools. Widely used in education and corporate training, it makes learning accessible anytime, anywhere.</p>
            </div>  
            {/* section 2 */}
              <div className='grid grid-cols-2 gap-10'>
                 <div className='space-y-4'>
                    <h1 className='text-2xl font-bold'>
                        Courses
                    </h1>
                    <div>
                    <ul className='space-y-2'>
                        <li className='cursor-pointer hover:text-forth duration-200 '>
                            Web Development
                        </li>
                        <li className='cursor-pointer hover:text-forth duration-200 '>
                            Web Development
                        </li><li className='cursor-pointer hover:text-forth duration-200 '>
                            Web Development
                        </li><li className='cursor-pointer hover:text-forth duration-200 '>
                            Web Development
                        </li><li className='cursor-pointer hover:text-forth duration-200 '>
                            Web Development
                        </li><li className='cursor-pointer hover:text-forth duration-200 '>
                            Web Development
                        </li>
                    </ul>
                    </div>

                    
                 </div>

                 <div className='space-y-4'>
                 <h1 className='text-2xl font-bold'>
                        Pages
                    </h1>
                    <ul className='space-y-2'>
                        <li className='cursor-pointer hover:text-forth duration-200 '>
                            Home
                        </li>
                        <li className='cursor-pointer hover:text-forth duration-200 '>
                            Services
                        </li><li className='cursor-pointer hover:text-forth duration-200 '>
                            Contact Us 
                        </li><li className='cursor-pointer hover:text-forth duration-200 '>
                            About Us
                        </li><li className='cursor-pointer hover:text-forth duration-200 '>
                            Blog
                        </li>
                    </ul>
                    </div>
              </div>


            {/* section3 */}
            <div className='space-y-4 max-w-[300px]  '>
                <h1 className='text-2xl font-bold'>Get In Touch</h1>
                <div className='flex items-center '>
                    <input type="text" className='p-3 rounded-s-xl py-4 bg-white w-full focus:ring-0 focus:outline-none placeholder:text-black' placeholder='send an email' />
                    <button className='bg-secondary text-white font-semibold py-4 px-6 rounded-e-xl'>Send</button>
                </div>
                <div className='flex space-x-6 py-3 '>
                    <a href="#">
                        <FaWhatsapp className='cursor-pointer hover:scale-105 duration-200 hover:text-primary' />
                    </a>
                    <a href="#">
                        <FaInstagram className='cursor-pointer hover:scale-105 duration-200 hover:text-primary' />
                    </a><a href="#">
                        <FaFacebook className='cursor-pointer hover:scale-105 duration-200 hover:text-primary' />
                    </a><a href="#">
                        <FaTwitter className='cursor-pointer hover:scale-105 duration-200 hover:text-primary' />
                    </a><a href="#">
                        <FaYoutube className='cursor-pointer hover:scale-105 duration-200 hover:text-primary' />
                    </a>
                </div>
            </div>
         
        </div>
      
    </div>
    </div>
  )
}

export default Footer
