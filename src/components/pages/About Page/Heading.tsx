import { FunctionComponent } from "react";

export const Heading:FunctionComponent=(props)=>{
  return(
    <h1 className="text-xl ">{props.children}</h1>
  )
}