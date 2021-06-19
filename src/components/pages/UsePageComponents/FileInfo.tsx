export const FileInfo=(props:{file:File|null})=>{
  const file= props.file
  if(file){
    return(
      <>
          <h1 className="mt-5">
            FileSize: {Math.ceil(file.size / 1024)} KB
          </h1>
          <h1 className="mt-2">
            Filename: {file.name.substring(0,20)} 
          </h1>
        </>
    )
  }
  return null
}