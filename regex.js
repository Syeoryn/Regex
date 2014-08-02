// dictionary is a list of english words, loaded in regex.html
var solveCrosswordPuzzle = function(letters){
  var pattern = '\\b'
  for(var i = 0; i < letters.length; i++){
    if(letters[i] === '_'){
      pattern += '.';
    } else {
      pattern += letters[i];
    }
  }
  pattern += '\\b';
  return dictionary.match(new RegExp(pattern,'gi'));
}