function isIsogram(str){
    //...
    let result = [];
    let letter = "";
    let resultStr = "";
    let stringLen = str.length;
    
    for(let i = 0; i < str.length; i++){
      letter = str[i];
      if(!result.includes(letter)){
        result.push(letter);
      }
    }
    resultStr = result.join("");
    let resultLen = resultStr.length;
    
    if(resultLen === stringLen){
      return true;
    }else{
      return false;
    }
    
  }