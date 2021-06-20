import { Section } from "./Section";
import { Para} from "./Paragraph";
import { Heading } from "./Heading";
import { ImageComponent } from "../ImageComponent";
export default function About(){
  return(
    <div className="p-8 sm:p-10 my-5 sm:my-8 min-h-screen">
      <Section>
        <Heading>
          Who Am i ?
        </Heading>
        <Para>
          Im <a className="underline focus:text-white sm:text-lg text-white cursor-pointer hover:text-blue-400" href="https://twitter.com/TikZ41414516">Aditya</a> a aspiring dev interested in building business
          of tomorrow
        </Para>
      </Section>
      <Section>
        <Heading>
          What was the problem ?
        </Heading>
        <Para>
          As a tech person looking at other stuff from other domain can be quite challenging due to so many new words which ur supposed to know in 5mins and so this idea came to be
        </Para>
      </Section>
      <Section>
        <Heading>
          Does this even Work ?
        </Heading>
        <Para>
          It does and doesn't. <br /> 
          It doesn't "always" work currently its still in sort of beta. Im using RegularExpressions to filter out the common words so it has some rough edges  
        </Para>
      </Section>
      <div className="text-center mt-16 ">
        <h1 className="text-2xl sm:text-3xl">
          Wann Reach out? I Would love it 
        </h1>
        <div className="flex bottom-0 mx-auto sm:w-2/3 flex-nowrap  justify-around justify-self-center mt-10">
          <a rel="noreferrer" target="blank" href="https://twitter.com/TikZ41414516">
            <ImageComponent src="https://img.icons8.com/color/48/000000/twitter--v2.png" className=" "/>
          </a>
          <a rel="noreferrer" target="blank" href="https://github.com/TikZSZ">
            <ImageComponent src="https://img.icons8.com/nolan/64/github.png" className=" "/>
          </a>
          <a  href="mailto:ad519195@gmail.com">
            <ImageComponent src="https://img.icons8.com/color/48/000000/gmail-new.png" className=" "/>
          </a>
        </div>     
      </div>
    </div>
  )
}