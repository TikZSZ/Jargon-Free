import { useEffect, useState } from "react";
import { PostProcess } from "./BackBones/PostProccessing";
import { CommonWords } from "./BackBones/CommonWords";
import axios from "axios";

interface WikiApi {
  query: {
    pages: {
      [key: string]: {
        pageId: number;
        title: string;
        extract: string;
      };
    };
  };
}

export const ShowFilteredText = (props: { text: string }) => {
  const [filteredText, setFilteredText] =
    useState<{
      [key: string]: {
        pageId: number;
        title: string;
        extract: string;
      };
    } | null>(null);
  useEffect(() => {
    (async () => {
      const postProcess = new PostProcess(props.text, CommonWords);
      const wordsToBeSearched = postProcess.removeThings(
        "gmi",
        '[.!;:,"”]|w+;w+|d*|d*[-]d*'
      );
      axios
        .get<WikiApi>("https://en.wikipedia.org/w/api.php", {
          params: {
            format: "json",
            action: "query",
            prop: "extracts",
            exintro: "",
            explaintext: "",
            redirects: "1",
            titles: wordsToBeSearched,
            origin:"*"
          },
        })
        .then((response) => {
          const pages = response.data.query.pages
          if(pages){
            console.log(pages);
            
            setFilteredText(response.data.query.pages);
          }

        });
    })();
  }, [props.text]);

  return (
    <div>
      {filteredText ? (
        <div>
          <>
            {Object.values(filteredText).map((page)=>{
              const {title,extract} = page
              if(extract){
                return(
                  <div className="my-10">
                    <h1>title: {page.title}</h1>
                    <p className="w-11/12 text-blue-200 md:text-xl leading-7 sm:w-2/3 mx-auto"><span className="text-black">definition: </span>{page.extract}</p>
                  </div>
                )
              }
              return ""
            })}
          </>
        </div>
      ) : (
        <div>Filtering Text</div>
      )}
    </div>
  );
};
