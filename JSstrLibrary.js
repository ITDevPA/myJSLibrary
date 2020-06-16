function repeatAString(stringTorepeat,numTimes)
{
  var returnString = stringTorepeat.repeat(numTimes);
  return returnString ;
}

function concatStrings(stringStart,stringFinal)
{
  var returnString = stringStart.concat(stringFinal);
  return returnString ;
}
function toMaius(stringToModify){
  return stringToModify.toUpperCase();
}

function toMinus(stringToModify){
  return stringToModify.toLowerCase();
}

function changeCaseToStr(stringToModify,option = 0)
{

  if (option == 0){
  return  toMaius(stringToModify);
  }else {
  return  toMinus(stringToModify);
  }
}



function detectSpam(input){
   input = input.toLowerCase();
   alert(input.indexOf("fake"));
   return input.indexOf("fake");
}
