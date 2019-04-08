class Formatter {
  //add static methods here
  static capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']/g, '')
  }

  static titleize(string){
    string = string.split(" ")
    let newString = []
     string.forEach(function(word){
     if(string.indexOf(word)==0 && word[0] == "a"){
     
      word = word.charAt(0).toUpperCase() + word.slice(1)
      
      newString.push(word)
     }else if(word !=="a" && word !== "the"  && word !== "an" && word !== "but" && word !== "of" && word !== "and" && word !== "for" && word !== "at" && word !== "by" && word !== "and" && word !== "from"){
      word = word.charAt(0).toUpperCase() + word.slice(1)      
      newString.push(word)
     }else{
      newString.push(word)
     }
     
   })

   return newString.join(" ")
  }
}