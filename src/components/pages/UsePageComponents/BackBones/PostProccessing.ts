export class PostProcess{
  public content:string
  public wordsToRemove:string[]

  constructor(content:string,wordsToRemove:string[]){
    this.content=content
    this.wordsToRemove=wordsToRemove
  }

  getRegExpString(flags:string,extraModifiers:string|null):RegExp{
    const regExString = this.wordsToRemove.map((word)=>{
      return `\\b${word}\\b`
    }).join("|")
    
    if(extraModifiers){
      const regEx=RegExp(`${regExString}|${extraModifiers}`,flags)
      return regEx
    }

    return RegExp(regExString,flags)
  }

  removeThings(flags:string="",extraModifiers:string|null=null){
    const regExString=this.getRegExpString(flags,extraModifiers)
    const filteredText=this.content.replace(regExString,"")
    console.log(regExString);
    
    const filteredArray= filteredText.split(" ").filter((word)=>{
      if(word===""||word==="\n"){
        return false
      }
      return true
    })
    
    
    
    
    return filteredArray.join("|")
  }
}

