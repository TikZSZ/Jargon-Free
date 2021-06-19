import ShowFetchedData from "./ShowFetched"


export function AfterRecogInfo(props:{text:string|null}){
  const {text}=props
  if(text){
    return(
      <>
        <div>
          <p className="w-11/12 text-blue-200 md:text-xl leading-7 sm:w-2/3 mx-auto">
            <span className="text-black">The Original Text is: </span>
            {text}
          </p>
        </div>
        <div className="my-8">
          <ShowFetchedData text={text} />
        </div>
      </>
    )
  }
  return null
}