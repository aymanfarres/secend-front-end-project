import { FaBookReader } from "react-icons/fa"
import women from "../../assets/images/women2.png"

import { FadUp } from "../Hero/Hero"
import {motion} from "framer-motion"
function Banner2() {
  return (
    <div>
      <div className="container  py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 ">
        {/*img */}
          <div className="flex justify-center items-center">
            <motion.img 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:false}}
            transition={{duration:0.5, ease:"easeInOut"}}
            src={women} alt="" />
          </div>
        {/*text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12 ">
              <motion.h1
               variants={FadUp(0.2)}
               initial="initial"
               whileInView={"animate"}
               viewport={{once:true}}
              className="text-3xl md:text-4xl font-bold !leading-snug text-forth">
                Join Our comunity for More Courses and learn
              </motion.h1>
              <motion.p
               variants={FadUp(0.6)}
               initial="initial"
               whileInView={"animate"}
               viewport={{once:true}}
              className="text-xl text-bold text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae harum sint rerum ducimus, facilis exercitationem quod perferendis aliquid minus incidunt esse magni tenetur ea? Sequi obcaecati et odit voluptate!</motion.p>
              <motion.button
               variants={FadUp(0.8)}
               initial="initial"
               whileInView={"animate"}
               viewport={{once:true}}
              className="primary-btn">Join</motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
