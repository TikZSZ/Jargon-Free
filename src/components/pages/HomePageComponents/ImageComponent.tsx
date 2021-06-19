import { FunctionComponent } from "react";

export const ImageComponent:FunctionComponent<{src:string}>=(props)=>{
  return(
    <img src={props.src} className="h-55 my-3 w-4/5 md:h-55 md:w-2/3 xl:w-1/3 lg:my-3 xl:ml-20 mx-auto" alt="" />
  )
}