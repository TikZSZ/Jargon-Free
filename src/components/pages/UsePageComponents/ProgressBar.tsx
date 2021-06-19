import { FunctionComponent } from "react";

interface Progress{
  jobId: string;
  status: string;
  progress: string;
}

export const ProgressBar: FunctionComponent<Progress> = ({progress,status,jobId}) => {
  function renderHelper() {
    if (status === "recognizing text") {
      return (
        <>
          <span className="text-lg ">
            Progress:{Math.ceil(parseFloat(progress) * 100)}
          </span>
          <div className=" mx-auto mt-6" style={{ width: "100%" }}>
            <div
              className="bg-gradient-to-br rounded-xl opacity-100 from-blue-800  via-blue-700 to-blue-700 h-12"
              style={{ width: `${100 * parseFloat(progress)}%` }}
            ></div>
          </div>
        </>
      );
    }
    return (
      <>
        <p className="text-lg">Starting Recognition</p>
      </>
    );
  }
  return <div className="sm:mt-2 mt-8" key={jobId}>
    {renderHelper()}
  </div>;
};
