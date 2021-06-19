import logo from "../../images/logo192.png";
export default function Logo(){
  return(
    <a
    href="/"
    className="list-none flex flex-row justify-evenly flex-nowrap mx-auto mt-5 sm:mt-0 sm:mx-8"
    >
      <img src={logo} alt="" className="h-8 w-8 mx-auto hidden sm:inline-block" />
      <p className="text-white focus:text-white hover:text-blue-300 font-normal base text-lg font-mono  ml-4">
        JargoFree
      </p>
  </a>
  )
}
