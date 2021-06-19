import { FunctionComponent } from "react";
import { useMediaQuery } from "../../useMediaQuery";

interface jargonPara{
  isLast?:boolean
}

export const JargonPara: FunctionComponent<jargonPara> = (props) => {
  const isMobile = useMediaQuery("(min-width:640px)");
  return (
    <>
      <p
        className="jargon-para"
        style={!isMobile ? { fontSize: "1.0rem",width:"100%" } : { fontSize: "1.25rem" }}
      >
        {props.children}
      </p>
      {!props.isLast&&<hr className=" opacity-40 border-dotted border-t-8  border-blue-800 w-3/4 mx-auto my-4 lg:w-2/3" />}
    </>
  );
};
JargonPara.defaultProps={isLast:false}