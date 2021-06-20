import { useEffect, useState } from "react";
import { PostProcess } from "../../../BackBones/PostProccessing";
import { CommonWords } from "../../../BackBones/CommonWords";
import axios from "axios";
import Loader from "react-loader-spinner";

interface WikiApi {
  batchcomplete: string;
  query?: {
    pages: Pages;
  };
  status:Status
}

interface Pages {
  [key: string]: {
    pageId: number;
    title: string;
    extract: string;
  };
}

interface FilteredText{
  pages:Pages,
  wordsFoundForSearch:string
}


type Status="fulfilled"|"failed"|"loading"|"idle"

export default function ShowFilteredText(props: { text: string }) {
  const [filteredText, setFilteredText] = useState<FilteredText | null>(null);
  const [status,setStatus]=useState<Status>("idle")

  useEffect(() => {
    (async () => {
      const postProcess = new PostProcess(props.text, CommonWords);
      const wordsToBeSearched = postProcess.removeThings(
        "gmi",
        `[\\-.!;:,"'’”()%=\\[\\]\\?\\d+]`
      )
      
      console.log(wordsToBeSearched);
      
      setStatus("loading")
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
          const {
            data: { query },
          } = response;
          if (query !== undefined && query.pages !== undefined) {
            console.log(query);
            setFilteredText({pages:response.data.query!.pages,wordsFoundForSearch:wordsToBeSearched});
            setStatus("fulfilled")
          }else{
            setStatus("failed")
          }
        });
    })();
  }, [props.text]);
  function renderLoader(){
    return(
      <div>
        <div>Filtering Text</div>
        <div
          className="h-screen"
          style={{ width:"50%", margin: "12rem 2.64rem 0 auto" }}
        >
          <Loader
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
            visible={true}
          />
        </div>
      </div>
    )
  }

  function renderFetchedData(){
    return (
      <div>
        {Object.values(filteredText!.pages).map((page) => {
          const { title, extract } = page;
          if (extract && extract.length > 35) {
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
        <div>
          <p>Words Found For Search: {filteredText?.wordsFoundForSearch}</p>
        </div>
      </div>
    );
    
  }

  function renderHelper() {
    if(status==="loading"){
      return(
        renderLoader()
      )
    }else if(status==="fulfilled"){
      return(
        renderFetchedData()
      )
    }else if(status==="failed"){
      return(
        <h1 className="text-blue-200 mt-10 text-3xl leading-4">
          Failed no Jargon found
        </h1>
      )
    }
    return null
  }
  return renderHelper();
}
