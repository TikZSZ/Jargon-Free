import logo from "../../images/logo192.png";
export const NavLogo=()=>{
  return(
    <a
    href="/"
    className="list-none flex flex-row flex-nowrap justify-self-center mx-auto sm:mx-8"
    >
    <img src={logo} alt="" className="h-8 w-8 " />
    <p className="text-white hover:text-gray-400 font-normal base sm:text-lg font-mono  ml-4">
      JargoFree
    </p>
  </a>
  )
}