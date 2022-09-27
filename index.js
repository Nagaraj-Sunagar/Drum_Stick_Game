
for(var i=0;i<7;i++){
    /*addEventListener is the function in js that takes to parameters first is the 
    property that gonna need a change and another parameter that 
    what gonna happen when the property is get changed maybe function to 
    show something or to change the any something property that need the change*/
document.querySelectorAll("button")[i].addEventListener("click",function (){
 var triggered=this.innerHTML;
//  var triggered=document.addEventListener("keydown",function(event){
//     // alert("Key is pressed!");
//      console.log(event);
//     return(event);
//  })
makeSound(triggered);
addStyle(triggered);

})
}
/*The function that is added to addEventListener property of the js 
so that any one of the button get triggered than this function is going to triggered 
we can even write this code in another way is that with a ananomus function that are only in the case
of if the function is using in the method with respect to js
 (i.e. the function without a name of the function syntax is like)
function (){
    //body of the function;
}*/


/*Now the task is to add property to keyboard itslef so that the key pressed on the keyboard is gona make effect! */



/*hear the key keydown response for the any key pressed form the keyboard when user is on the website the function used along with the 
keydown key may take a log what key as pressed by using this property we gonna using the function to but by using 'key' parameter we gonna 
know directly which key has been pressed by the user , in this scenario we gonna calling makeSound that takes a input and plays a sound with 
corresponding to that input*/
var triggered=document.addEventListener("keydown",function(event){
   // alert("Key is pressed!");
    console.log(event.key);
    makeSound(event.key);
    addStyle(event.key);
})


function makeSound(key){
    switch(key){
        case "w":var audio=new Audio('sounds/tom-1.mp3');
               audio.play();
               break;
        case "a":var audio=new Audio('sounds/tom-2.mp3');
               audio.play();
               break;
        case "s":var audio=new Audio('sounds/tom-3.mp3');
               audio.play();
               break;
        case "d":var audio=new Audio('sounds/tom-4.mp3');
               audio.play();
               break;
        case "j":var audio=new Audio('sounds/snare.mp3');
               audio.play();
               break;
        case "k":var audio=new Audio('sounds/crash.mp3');
               audio.play();
               break;
        case "l":var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
               break;
        default:console.log(triggered);
                break;
    }
}



function addStyle(curkey){
    var activekey=document.querySelector("."+curkey);
    activekey.classList.add("pressed");

    setTimeout(function(){
        activekey.classList.remove("pressed")
    },100)
}