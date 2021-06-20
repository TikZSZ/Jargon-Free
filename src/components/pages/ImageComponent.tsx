import { FunctionComponent } from "react";
import { useState } from "react";
import Loader from "react-loader-spinner";

type Status = "loaded" | "loading" | "failed to load";

export const ImageComponent: FunctionComponent<{ src: string,className?:string }> = (props) => {
  const [loadingStatus, setLoadingStatus] = useState<Status>("loading");
  function handleImageLoaded() {
    setLoadingStatus("loaded");
  }

  return (
    <>
      <img
        src={props.src}
        onLoad={handleImageLoaded}
        className={!props.className?(`h-55 my-3 mx-auto w-4/5 md:h-55 md:w-2/3 xl:w-1/3 lg:my-3 xl:ml-20`):(props.className)} 
        alt=""
      />
      {loadingStatus === "loading" && (
        <div className="mx-auto w-1/2 lg:w-auto" style={{margin:"0 2.6rem 0 auto"}}>
          <Loader
          type="Bars"
          color="#00BFFF"
          height={100}
          width={100}
          visible={true}
        />
        </div>
        
      )}
    </>
  );
};
