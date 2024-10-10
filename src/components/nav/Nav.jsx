import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

function Nav() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const navbarmenu = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Services", path: "services" },
    { id: 3, title: "Contact Us", path: "contact" },
    { id: 4, title: "About Us", path: "about" },
  ];

  return (
    <div className={`${open ? 'bg-fifth' : ''}`}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl">Farres</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {navbarmenu.map((o) => (
              <li key={o.id}>
                <Link
                  to={o.path}
                  smooth={true}
                  duration={500}
                  className="inline-block py-2 cursor-pointer px-3 hover:text-third relative group"
                >
                  <div className="w-2 h-2 bg-forth mt-2 absolute left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden rounded-full"></div>
                  {o.title}
                </Link>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden ">
          {open ? (
            <IoClose className="text-4xl cursor-pointer" onClick={toggle} />
          ) : (
            <IoMenu className="text-4xl cursor-pointer" onClick={toggle} />
          )}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {open && (
        <div className="h-[calc(100vh-106px)] transition-all duration-300 ease-in-out bg-fifth">
          <ul className="flex flex-col  justify-center items-center text-center space-y-8 mt-8">
            {navbarmenu.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)} // Close menu on click
                className="font-bold text-xl cursor-pointer"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
