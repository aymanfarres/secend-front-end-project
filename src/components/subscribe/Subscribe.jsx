import { FaBell } from "react-icons/fa"
import gy from "../../assets/images/kk.jpg"
import {motion} from "framer-motion"
import { FadUp } from "../Hero/Hero"


const bgStyle={
    backgroundImage:`url(${gy})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center"
}


function Subscribe() {
  return (
    <div className="bg-[#f7f7f7] ">
        <div style={bgStyle} className="   py-24 md:py-28 ">
            <div className="flex">
                <div className="text-center "><motion.h1
                variants={FadUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{once:true}}
                className="text-4xl text-white font-bold !leading-snug"> 
                    +1.5m member learning on the platform
                    </motion.h1>
                    <motion.p
                    variants={FadUp(0.6)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{once:true}}
                    className="text-gray-400 px-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint laboriosam ea quam ipsam laborum iure obcaecati perspiciatis omnis voluptas magni. Dolorum voluptas sit inventore pariatur totam animi exercitationem dignissimos reiciendis!</motion.p>
                    <motion.a
                    variants={FadUp(0.9)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{once:true}}
                    href="" className="primary-btn !mt-8 inline-flex items-center gap-4 group ">Subscribe
                        <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200"/>
                    </motion.a>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Subscribe
