import { FunctionComponent } from "react";

export const Para:FunctionComponent=(props)=>{
  return(
    <p className="text-lg text-blue-200 mt-1">{props.children}</p>
  )
}