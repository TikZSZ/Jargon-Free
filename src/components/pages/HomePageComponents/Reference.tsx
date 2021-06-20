import { FunctionComponent } from "react"

interface ReferenceProps{
  link:string
}

export const Reference:FunctionComponent<ReferenceProps>=(props)=>{
  return(
    <span>
    <a
      href={props.link}
      className="text-white hover:text-blue-400 underline"
    >
      {" "+props.children+" "}
    </a>
  </span>
  )
}