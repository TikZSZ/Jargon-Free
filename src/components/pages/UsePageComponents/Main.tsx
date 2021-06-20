import { useState } from "react";
import { recognize } from "../../../BackBones/Scanner";
import { Image } from "./ImageFileComponent";
import { ProgressBar } from "./Progress";
import Loader from "react-loader-spinner";
import { FileInfo } from "./FileInfo";
import { AfterRecogInfo } from "./AfterRecogInfo";


interface Track {
  jobId: string;
  progress: string;
  status: string;
}

export default function Main(){
  const [text, setText] = useState<string | null>(null);
  const [submittedFile, setFile] = useState<File | null>(null);
  const [track, keepTrack] = useState<Track | null>(null);

  async function onSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    setText(null);
    keepTrack(null);
    const files = e.target.files;
    if (files) {
      const file = files[0];
      setFile(file);
      setText(await recognize(file, helpTrack));
    }
  }

  const helpTrack = (m: Track) => {
    const { status } = m;
    if (status === "recognizing text") {
      keepTrack(m);
    }
  };

  function renderImagePartAfterFileSubmit(){
    if(submittedFile && track !== null){
      return(
        <div>
          <Image imageFile={submittedFile}>
            <ProgressBar
              jobId={track.jobId}
              status={track.status}
              progress={track.progress}
            />
          </Image>
        </div>
      )
    }else if(submittedFile){
      return(
        <div style={{width:"50%" ,margin:"0 2.64rem 0 auto"}}>
          <Loader type="ThreeDots" 
          color="#00BFFF"
          height={100}
          width={100}
          visible={true}/>
        </div>
      )
    }
    return null
  }


  return (
    <div className="p-6 sm:p-8 my-5 sm:my-8 min-h-screen text-center">
      <div className="mx-auto">
        <label className="mx-auto">
          <input
            type="file" name="docs"
            style={{ maxWidth: "80%" }}
            className="mx-auto  text-base custom-file-input mt-5 ml-10 sm:ml-20 "
            onChange={(e) => {
              onSubmit(e);
              keepTrack(null);
            }}
            hidden
          />
          Upload A image containing jargoned text
        </label>
        <FileInfo file={submittedFile}/>
      </div>
      {renderImagePartAfterFileSubmit()}
      <AfterRecogInfo text={text}/>
    </div>
  );
};
