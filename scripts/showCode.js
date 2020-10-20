function showCode (filePath, codeClass) { 
    //$(`code[class='${codeClass}']`).html(htmlString);
    var selector = "#" + codeClass;
    //$(selector).load('test.txt');
    
    
    $(document).ready(function(){
        $(selector).load("http://www.mpilch.pl/test.js", "data");
    });
      
 }
