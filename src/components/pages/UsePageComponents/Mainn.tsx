import { Container } from "../Container";
import { useState } from "react";
import { recognize } from "./BackBones/Scanner";
import { Image } from "./Image";
import { ProgressBar } from "./ProgressBar";

interface Track {
  jobId: string;
  progress: string;
  status: string;
}

export interface PreviousTracks {
  [jobId: string]: Track;
}

interface General {
  previousTracks: PreviousTracks;
  copiedTracks: PreviousTracks;
}

export const Main = () => {
  const [submittedFiles, setFiles] = useState<FileList | null>(null);
  const [previousTracks, updatePreviousTracks] =
    useState<PreviousTracks | null>(null);
  const [generalState, setGeneralState] = useState<General | null>(null);
  const copyPiedTracks: PreviousTracks = {};
  async function onSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files) {
      // setFiles(files);
      setFiles(files);
      Object.values(files).map(async (imageFile) => {
        console.log(imageFile);
        return await recognize(imageFile, helpTrack);
      });
      // Promise.all(promises).then((values) => {
      //   console.log(values);
      // });
    }
  }
  const helpTrack = (m: Track) => {
    console.log(m);
    const { jobId, status, progress } = m;
    if (status === "recognizing text") {
      if (jobId && progress !== undefined) {
        setGeneralState({
          previousTracks: {
            ...generalState?.previousTracks,
            [jobId]: { jobId, status, progress },
          },
          copiedTracks: {
            ...generalState?.copiedTracks,
            [jobId]: { jobId, status, progress },
          },
        });
      } else {
        console.log("hello", copyPiedTracks[jobId].progress);

        setGeneralState({
          previousTracks: {
            ...generalState?.copiedTracks,
            [jobId]: { jobId, status, progress },
          },
          copiedTracks: {
            ...generalState?.copiedTracks,
            [jobId]: { jobId, status, progress },
          },
        });
      }
    }
  };
  {
    if (previousTracks) {
      console.log(
        previousTracks["eng_bw.png"]?.progress,
        previousTracks["Write-a-Paragraph-Step-10-Version-4.jpg"]?.progress
      );
      console.log(copyPiedTracks);
    }
  }
  return (
    <Container>
      <div>
        <input type="file" name="docs" id="" multiple onChange={onSubmit} />
      </div>
      <div>
        {submittedFiles &&
          Object.values(submittedFiles).map((file) => {
            return (
              <div>
                <Image imageFile={file}>
                  {generalState !== null &&
                    generalState.previousTracks[file.name] !== null && (
                      <ProgressBar
                        jobId={generalState.previousTracks[file.name]?.jobId}
                        progress={generalState.previousTracks[file.name]?.progress}
                        status={generalState.previousTracks[file.name]?.status}
                      />
                    )}
                </Image>
              </div>
            );
          })}
      </div>
    </Container>
  );
};
