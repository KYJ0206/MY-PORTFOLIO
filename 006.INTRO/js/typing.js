var str = "Welcome to my Portfolio";
var c = 0;

setInterval(function(){
      if(c < 23)
         $('#typing').append(str[c]);
      c++;
}, 200);