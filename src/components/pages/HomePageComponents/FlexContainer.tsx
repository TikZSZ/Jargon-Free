import { FunctionComponent } from "react"

export const FlexContainer:FunctionComponent=(props)=>{
  //xl:flex-nowrap
  return(
    <div className="md:flex md:flex-row md:flex-wrap  text-centre xl:text-left my-10 lg:my-20">
      {props.children}
    </div>
  )
}