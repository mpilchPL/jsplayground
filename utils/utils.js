


String.prototype.insertAt = function (loc,strChunk) { 
    return (this.valueOf().substr(0,loc)) + strChunk + (this.valueOf().substr(loc));
 };

 Array.prototype.getRandom = function () { 
    var n = Math.floor(Math.random() * this.length);
    return this[n];
 };