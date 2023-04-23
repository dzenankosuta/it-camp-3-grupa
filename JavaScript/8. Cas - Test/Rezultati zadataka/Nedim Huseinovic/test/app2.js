for(brojac = 1; brojac < 101; brojac++)
if (brojac % 3 == 0 && brojac % 5 == 0){
    console.log("FizzBuzz")
}
else if(brojac % 3 == 0) {
    console.log("FIZZ");
}
else if(brojac % 5 == 0){
    console.log("BUZZ")
}
else{
    console.log(brojac)
}
