import { FlexContainer } from "./FlexContainer";
import { ImageComponent } from "./ImageComponent";
import { JargonPara } from "./JargonPara";
import jargoPic from "../../../images/JargoPic.jpg";
import tesseract from "../../../images/tesseract.png";
import ocrImage from "../../../images/ocr.png";
import { Reference } from "./Reference";
import { InnerFlexDiv } from "./InnerFlexDiv";
import { Container } from "../Container";

export default function Home() {
  return (
    <Container>
      <h1 className="text-3xl mt-7 sm:mt-10 font-semibold ">Welcome to JargonFree</h1>
      <p
        className="home-para sm:w-2/3 mx-auto mt-10 xl:mt-5"
        style={{ fontSize: "1.2rem" }}
      >
        Jargon is just a tool, not a weapon — and you shouldn't use it as a way
        to assert your dominance as the Alpha Geek. It's just not a good idea.
        Only putzes do that, people unworthy of the terms they use.
      </p>


      <FlexContainer>
        <ImageComponent src={jargoPic} />
        <InnerFlexDiv>
          <JargonPara color={"black"}>How do we Help?</JargonPara>
          <JargonPara isLast={true}>
            JargonFree gives u information thats required to "deJargon" the
            content
          </JargonPara>
        </InnerFlexDiv>
      </FlexContainer>


      <div>
        <h1 className="text-3xl font-semibold">How Does It Work?</h1>
      </div>


      <FlexContainer>
        <ImageComponent src={ocrImage} />
        <InnerFlexDiv>
          <JargonPara isLast={true}>
            We use{" "}
            <Reference
              text="Tessract"
              link="https://github.com/tesseract-ocr/tesseract"
            />{" "}
            to scan ur "JargonedContent" then after PostProcessing show u information that helps u "deJargonContent"
          </JargonPara>
        </InnerFlexDiv>
      </FlexContainer>


      <FlexContainer>
      <ImageComponent src={tesseract} />
        <InnerFlexDiv>
          <JargonPara color={"black"}>
            What Is
            <Reference
              text="Tessract"
              link="https://github.com/tesseract-ocr/tesseract"
            />
            ?
          </JargonPara>
          <JargonPara isLast={true}>
            Tesseract is an{" "}
            <Reference
              text="optical character recognition engine"
              link="https://wiki.grooper.com/index.php?title=OCR_Engine#:~:text=An%20OCR%20Engine%20is%20the,out%20what%20characters%20they%20represent.&text=Version%202.72%20and%20beyond%20also%20support%20Google%27s%20open%20source%20Tesseract%20OCR%20engine."
            />{" "}
            for various operating systems. It is free software, released under
            the Apache License. Originally developed by Hewlett-Packard as
            proprietary software in the 1980s, it was released as open source in
            2005 and development has been sponsored by Google since 2006.
          </JargonPara>
        </InnerFlexDiv>
      </FlexContainer>
    </Container>
  );
};
