import React from 'react'
import { FaPhp } from 'react-icons/fa'
import { ImStatsDots } from 'react-icons/im'
import { IoMdLaptop } from 'react-icons/io'
import { IoHappyOutline } from 'react-icons/io5'
import { RiCustomerServiceLine } from 'react-icons/ri'
import { TbWorldWww } from 'react-icons/tb'
import {motion} from "framer-motion"
const serviceData= [
    {
        id:1,
        title:"Web Development",
        link: "#",
        icon:<TbWorldWww />,
        delay:0.1
    }, {
        id:2,
        title:"php development",
        link: "#",
        icon:<FaPhp />,
        delay:0.2
    }, {
        id:3,
        title:"Data Managments",
        link: "#",
        icon:<IoMdLaptop />        ,
        delay:0.3
    }, {
        id:4,
        title:"Satisfied Customers",
        link: "#",
        icon:<IoHappyOutline />
        ,
        delay:0.4
    }, {
        id:5,
        title:"SEO",
        link: "#",
        icon:<ImStatsDots />
        ,
        delay:0.5
    }, {
        id:6,
        title:"Customer Services",
        link: "#",
        icon:<RiCustomerServiceLine />
        ,
        delay:0.6
    }
]

const slideleft=(delay)=>{
    return {
        initial:{
            opacity:0,
            x:50
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duration:0.3,
                delay:delay,
                ease:"easeInOut"
            }
        }
    }
}


const Services=()=> {
  return (
    <div className='bg-white'>
       <div className='container pb-14 pt-16'>
        <h1 className='text-4xl font-bold text-left pb-10'>Services We have</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8'>
            {serviceData.map((o)=>(
                 <motion.div
                  variants={slideleft(o.delay)}
                  initial='initial'
                  whileInView={"animate"}
                  viewport={{once:true}}

                 
                 key={o.id} className='bg-fifth cursor-pointer rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                    <div className='text-4xl mb-4'>{o.icon} </div>
                    <h1 className='text-lg font-semibold text-center px-3 '>{o.title} </h1>
                 </motion.div>
            ))}
        </div>
       </div>
    </div>
  )
}

export default Services
