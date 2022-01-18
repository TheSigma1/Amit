function lstr(str){
    len=str.split(" ");
    console.log(len);   
    return len.sort((a,b)=> b.length - a.length)[0];
    }
    console.log("the largest word in the given string is:-  ", lstr("Web Developement Tutorial"));
   