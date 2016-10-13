function welcome(response){
    if (response == 'Hello'){
        return "Hello World"
    }
   else{
       return "You did not say hello!"
   }    
}
var val = prompt("Type 'Hello'")
alert(welcome(val));