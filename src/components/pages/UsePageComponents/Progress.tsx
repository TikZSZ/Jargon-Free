import { FunctionComponent } from "react";
import Loader from "react-loader-spinner";

interface Progress{
  jobId: string;
  status: string;
  progress: string;
}

export const ProgressBar: FunctionComponent<Progress> = ({progress,status,jobId}) => {
  function renderHelper() {
    if (status === "recognizing text") {
      const progressInt=Math.ceil(parseFloat(progress) * 100)
      if(progressInt<100){
        return(
          <>
            <span className="text-lg ">
              Progress:{Math.ceil(progressInt)}
            </span>
            <div style={{width:"50%" ,margin:"20px 2.2rem 0 auto"}}>
            <Loader type="Circles" 
              color="#00BFFF"
              height={100}
              width={100}
              visible={true}/>
            </div>
          </>
        );
      }
      return (
        <p className="text-blue-300 text-lg">Recognition Complete</p>
      )
    }

    return (
      <>
        <p className="text-lg">Starting Recognition</p>
        <div style={{width:"50%" ,margin:"0 2.2rem 0 auto"}}>
          <Loader type="ThreeDots" 
            color="#00BFFF"
            height={80}
            width={80}
            visible={true}/>
          </div>
      </>
    );
  }


  return <div className="sm:mt-2 mt-8" key={jobId}>
    {renderHelper()}
  </div>;
};
