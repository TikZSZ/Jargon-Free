import { NavItem } from "./NavItem"
import {useHistory} from "react-router-dom"

export const NavItemList=()=>{
  const history=useHistory()
  const onNavClick = (link:string) =>{
    window.scrollTo(0,0)
    history.replace(link)
    
  }
  return(
    <ul className="list-none flex flex-row flex-nowrap sm:mx-8">
        <NavItem whereTo="Home" link="/" onNavClick={()=>{onNavClick("/")}} />
        <NavItem whereTo="Eliminate Jargon" link="/use" onNavClick={()=>{onNavClick("/")}} />
    </ul>
  )
}