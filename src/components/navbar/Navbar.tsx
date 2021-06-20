import NavLogo from "./NavLogo";
import { useMediaQuery } from "../useMediaQuery";
import { NavList } from "./NavList";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:640px)");
  if (!isMobile) {
    return (
      <div className="flex flex-row flex-nowrap justify-between ">
        <NavLogo />
        <NavList />
      </div>
    );
  } else {
    return (
      <div className="flex flex-row flex-nowrap justify-center  sticky inset-y-0 bg-black h-12 ">
        <NavList />
      </div>
    );
  }
};
