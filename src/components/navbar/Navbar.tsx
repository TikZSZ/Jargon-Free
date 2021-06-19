import  NavLogo  from "./NavLogo";
import { useMediaQuery } from "../useMediaQuery";
import { useHistory } from "react-router";
import { NavItem } from "./NavItem";
export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:640px)");
  const history=useHistory()
  const onNavClick = (link:string) =>{
    history.replace(link)
    window.scrollTo(0,0)
  }
  return (
    <>
      {!isMobile?(
        <div className="flex flex-row flex-nowrap justify-between ">
        <NavLogo /> 
        <ul className="list-none flex flex-row flex-nowrap sm:mx-8">
          <NavItem whereTo="Home" link="/" onNavClick={onNavClick} />
          <NavItem whereTo="Eliminate Jargon" link="/use" onNavClick={onNavClick} />
        </ul>
        </div>
      ):(
        <div className="flex flex-row flex-nowrap justify-center  sticky inset-y-0 bg-black h-10 ">
          <ul className="list-none flex flex-row  flex-nowrap mt-2 sm:mx-8">
            <NavItem whereTo="Home" link="/" onNavClick={onNavClick} />
            <NavItem whereTo="Eliminate Jargon" link="/use" onNavClick={onNavClick} />
          </ul>
        </div>
      )}
    </>
  );
};

    
