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

  removeThings(flags:string="",extraModifiers:string|null=null):string{
    const regExString=this.getRegExpString(flags,extraModifiers)

    let finalArray:string[] =[]

    this.content
    .split("\n")
    .map((line)=>{
      return(
        line.replace(regExString,"").split(" ")
      )
    }).map((words)=>{
      return words.filter((word)=>{
        if(word===""){
          return false
        }
        return true
      }) 
    })
    .forEach((array)=>{
      if(array.length>0){
        finalArray.push(...array)
      }
    })
    
    return finalArray.join("|")
  }
}


// const filteredText=this.content.replace(regExString,"")

// filteredText.map((words)=>{
    //   return words.filter((word)=>{
    //     if(word===""){
    //       return false
    //     }
    //     return true
    //   }) 
    // }).map((array)=>{
    //   if(array.length>0){
    //     finalArray.push(...array)
    //   }
    // })
    


    // const filteredArray= filteredText.split(" ").filter((word)=>{
    //   if(word===""||word==="\n"){
    //     return false
    //   }
    //   return true
    // }) 
    // console.log(filteredArray);