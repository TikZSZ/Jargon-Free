import { FunctionComponent } from "react";
import { FlexContainer } from "../HomePageComponents/FlexContainer";
import { ImageComponent } from "../HomePageComponents/ImageComponent";


interface ImageProps {
  imageFile: File;
}

export const Image: FunctionComponent<ImageProps> = (props) => {
  const image = URL.createObjectURL(props.imageFile);
  return (
    <div>
      <FlexContainer>
        <ImageComponent src={image} />
        <div className="mx-auto lg:w-1/2">
        {props.children}
        </div>
      </FlexContainer>
    </div>
  )
};
