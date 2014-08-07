// Write a function that takes a string as an input
// and validates that the string is a valid email address

// Email may contain:
//       local part (simplified):
//                   Any english letter (A-Z, a-z)
//                   Digits 0-9
//                   Special characters: ! # $ % & ' ~
//                   Period . as long as it isn't the first or last letter
//                                and it doesn't appear two+ times consecutively
//        domain part (simplified):
//                   Any number of english letters, then ., finally more english letters


var validateEmail = function(emailAddress){
  return emailAddress.match(/\b^[^.][\w!#$%&'~]+[^.]@[\w]+\.[\w]+\b/)
}
