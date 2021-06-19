import { useEffect, useState } from "react";
import { PostProcess } from "../../../BackBones/PostProccessing";
import { CommonWords } from "../../../BackBones/CommonWords";
import axios from "axios";
import Loader from "react-loader-spinner";


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

export default function ShowFilteredText(props: { text: string }) {
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
        '[.!;:,"”]|w+;w+|\\d*|\\d*[-]\\d*|\\n'
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
            origin: "*",
          },
        })
        .then((response) => {
          const pages = response.data.query.pages;
          if (pages) {
            setFilteredText(response.data.query.pages);
          }
        });
    })();
  }, [props.text]);
  

  function renderHelper(){
    if(filteredText){
      return(
        <div>
          <>
            {Object.values(filteredText).map((page) => {
              const { title,extract } = page;
              if (extract && extract.length>35) {
                return (
                  <div className="my-10" key={title}>
                    <h1>Title: {page.title}</h1>
                    <p className="w-11/12 text-blue-200 md:text-xl leading-7 sm:w-2/3 mx-auto">
                      <span className="text-black">Definition: </span>
                      {page.extract}
                    </p>
                  </div>
                );
              }
              return "";
            })}
          </>
        </div>
      )
    }
    return(
      <div>
        <div>Filtering Text</div>
        <div  className="h-screen" style={{width:"50%" ,margin:"12rem 2.2rem 0 auto"}}>
          <Loader type="Bars" 
          color="#00BFFF"
          height={100}
          width={100}
          visible={true}/>
        </div>
      </div>
    )
  }
  return (
    renderHelper()
  );
};
