// ######## getCharsIndexes ##########
// returns an array of indexes on which the given 'char' appears in string, ignores upper cases
// example: elephant.getCharsIndexes('e') returns [0,2]
String.prototype.getCharsIndexes = function (char) { 
   var letter = char.toLowerCase();
   var word = this.toLowerCase();
   var charsPos = new Array();
   for (i = 0; i < word.length; i++) {
      if (word.charAt(i) == letter)
         charsPos.push(i);
   }
   return charsPos;
};

String.prototype.insertAt = function (loc,strChunk) { 
    return (this.valueOf().substr(0,loc)) + strChunk + (this.valueOf().substr(loc));
 };

 Array.prototype.getRandom = function () { 
    var n = Math.floor(Math.random() * this.length);
    return this[n];
 };