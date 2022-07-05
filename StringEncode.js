/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive letters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";

  const str5 = "aaaabbcdddaaa";
  const expected5 = "a4b2c1d3a3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs only if the
   * character occurs more than two time.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
function encodeStr(str) {
    var newstr = "";
    var counter = 0;
    for(i=0;i<str.length; i++){
        if(str[i]===str[i+1]){
            counter ++ 
        }
        else{
            counter ++
            newstr += str[i] + counter
            counter = 0
        }
    }
        if(newstr.length >= str.length){
            return str
        }
        else{
            return newstr
        }
}

console.log(encodeStr(str1))
console.log(encodeStr(str5))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))