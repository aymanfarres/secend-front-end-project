import { FaBookReader } from "react-icons/fa"
import women from "../../assets/images/women.jpg"
import { FadUp } from "../Hero/Hero"
import {motion} from "framer-motion"
function Banner() {
  return (
    <div>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 ">
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
              <h1 className="text-3xl md:text-4xl font-bold !leading-snug">
                Best E-learning Platform In the internet
              </h1>
              <div className="flex flex-col gap-6">
              <motion.div
              variants={FadUp(0.2)}
              initial="initial"
              whileInView={"animate"}
              viewport={{once:true}}

              className="flex items-center gap-4 p-6 bg-forth rounded-2xl hover:bg-white duration-300 hover:shadow-2xl ">
                <FaBookReader className="text-2xl"/>
                <p className="text-lg">+999,999 Courses</p>
              </motion.div>
              <motion.div
              variants={FadUp(0.6)}
              initial="initial"
              whileInView={"animate"}
              viewport={{once:true}}
              
              className="flex items-center gap-4 p-6 text-white bg-forth rounded-2xl hover:bg-white duration-300 hover:shadow-2xl ">
                <FaBookReader className="text-2xl"/>
                <p className="text-lg">+999,999 Courses</p>
              </motion.div>
              <motion.div
              variants={FadUp(1)}
              initial="initial"
              whileInView={"animate"}
              viewport={{once:true}}
              
              className="flex items-center gap-4 p-6 bg-forth rounded-2xl hover:bg-white duration-300 hover:shadow-2xl ">
                <FaBookReader className="text-2xl"/>
                <p className="text-lg">+999,999 Courses</p>
              </motion.div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
