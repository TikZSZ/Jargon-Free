import { FunctionComponent } from "react";

export const Container:FunctionComponent=(props)=>{
  return(
    <div className="p-3 sm:p-8 my-0 sm:my-8 text-center">
      {props.children}
    </div>
  )
}