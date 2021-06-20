import { FunctionComponent } from "react";
export const Section:FunctionComponent=(props)=>{
  return(
    <div className="mt-5">
      {props.children}
    </div>
  )
}