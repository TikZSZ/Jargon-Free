import { FunctionComponent } from "react";

export const InnerFlexDiv:FunctionComponent=(props)=>{
  return(
    <div className="mx-auto lg:w-1/2">
      {props.children}
    </div>
  )
}