interface ReferenceProps{
  link:string
  text:string
}

export const Reference=(props:ReferenceProps)=>{
  return(
    <span>
    <a
      href={props.link}
      className="text-white hover:text-blue-400 underline"
    >
      {" "+props.text+" "}
    </a>
  </span>
  )
}