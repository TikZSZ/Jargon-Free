import Loader from "react-loader-spinner"

export const SuspenseLoader=()=>{
  return(
    <div  className="h-screen" style={{width:"50%" ,margin:"12rem 2.63rem 0 auto"}}>
      <Loader type="Bars" 
      color="#00BFFF"
      height={100}
      width={100}
      visible={true}/>
    </div>
  )
}