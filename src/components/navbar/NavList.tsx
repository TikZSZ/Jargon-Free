import { NavItem } from "./NavItem"
import {useHistory} from "react-router-dom"

export const NavList=()=>{
  const history=useHistory()
  const onNavClick = (link:string) =>{
    window.scrollTo(0,0)
    history.replace(link)
  }
  return(
    <ul className="list-none flex flex-row mt-3 sm:mt-0 flex-nowrap sm:mx-8">
      <NavItem whereTo="Home" link="/" onNavClick={onNavClick} />
      <NavItem whereTo="Eliminate Jargon" link="/use" onNavClick={onNavClick} />
      <NavItem whereTo="About" link="/about" onNavClick={onNavClick} />
    </ul>
  )
}