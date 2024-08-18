import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import TextAnimationHome from './ui/TextAnimationHome';

const Navbar = ({ currentSection }) => {
  const isBlackBackground = currentSection !== 'home' && currentSection !== 'footer';

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#chooseus" },
    { label: "Services", href: "#services" },
    { label: "Our Works", href: "#works" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-3 backdrop-blur-lg ${isBlackBackground ? 'bg-black' : ''}`}>
      <div className="container px-[4rem] mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-[11.196 rem] mr-2" src={logo} alt="Logo" />
          </div>
          
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} >
                <a href={item.href}> <TextAnimationHome firstText={item.label} secondText={item.label} /></a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {!mobileDrawerOpen && (
              <div borderRadius="2.75rem" className="text-base md:text-lg lg:text-[1.125rem] text-white border border-white-100 rounded-full  md:py-1 lg:py-[0.5rem] px-3 md:px-4 lg:px-[1.5rem] leading-tight md:leading-[1.5rem] lg:leading-[1.625rem] tracking-wide md:tracking-[0.5px] lg:tracking-[1px] whitespace-nowrap">
                Contact Us
              </div>
            )}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center text-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} onClick={closeNavbar}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#footer" onClick={closeNavbar} className="py-2 px-3 border rounded-md">
                Contact Us
              </a>
            </div>
          </div>
        )}
        <hr className="mt-4 "/>
      </div>
    </nav>
  );
};

export default Navbar;