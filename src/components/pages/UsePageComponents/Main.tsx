import { useState } from "react";
import { recognize } from "./BackBones/Scanner";
import { Image } from "./Image";
import { ProgressBar } from "./ProgressBar";
import { ShowFilteredText } from "./ShowFilteredText";
interface Track {
  jobId: string;
  progress: string;
  status: string;
}

export const Main = () => {
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
    console.log(m);
    const { status } = m;
    if (status === "recognizing text") {
      keepTrack(m);
    }
  };

  return (
    <div className="p-0 sm:p-8 my-10 sm:my-8 min-h-screen text-center">
      <div className="mx-auto">
        <label className="mx-auto">
          Upload A image containing jargoned text
        </label>
        <input
          type="file"
          name="docs"
          id=""
          style={{ maxWidth: "80%" }}
          className="mx-auto  mt-5 ml-10 sm:ml-20 "
          onChange={(e) => {
            onSubmit(e);
            keepTrack(null);
          }}
        />
      </div>
      <div>
        {submittedFile && track !== null && (
          <div>
            <Image imageFile={submittedFile}>
              <ProgressBar
                jobId={track.jobId}
                status={track.status}
                progress={track.progress}
              />
            </Image>
          </div>
        )}
      </div>
      {text && (
        <>
          <div>
            <p className="w-11/12 text-blue-200 md:text-xl leading-7 sm:w-2/3 mx-auto">
              <span className="text-black">The Original Text is: </span>
              {text}
            </p>
          </div>
          <div className="my-8">
            <ShowFilteredText text={text} />
          </div>
        </>
      )}
    </div>
  );
};
