import { NavLogo } from "./NavLogo";
import {NavItemList} from "./NavList"
import { useMediaQuery } from "../useMediaQuery";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:640px)");
  return (
    <div className="flex flex-row flex-nowrap justify-between ">
      <NavLogo /> 
      {!isMobile && (
        <NavItemList />
      )}
    </div>
  );
};
