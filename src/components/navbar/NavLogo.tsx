export default function Logo(){
  return(
    <a
    href="/"
    className="list-none flex flex-row justify-evenly flex-nowrap mx-auto mt-5 sm:mt-0 sm:mx-8"
    >
      {/* <img src={logo} alt="" className="h-8 w-8 mx-auto hidden sm:inline-block" /> */}
      <img  alt="" className="h-8 w-8 mx-auto hidden sm:inline-block" src="https://img.icons8.com/fluent/48/000000/scroll.png"/>
      
      <p className="text-white focus:text-white hover:text-green-300 font-normal 
      base text-lg md:text-xl mt-0.5 font-mono  ml-4">
        JargonFree
      </p>
  </a>
  )
}
