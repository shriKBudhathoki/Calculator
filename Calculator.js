let display=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button'); //selector all for the all tags 

let string='';

let buttonsArray= Array.from(buttons) //Node to array
buttonsArray.forEach(btn=>{ // Arrow Function array to varabiles
   btn.addEventListener('click',(event)=>{
    // console.log(event) For Checking the work of the function 

if(event.target.innerHTML=='Del')
{
    string=string.substring(0,string.length-1);
    display.value=string;
}
else if(event.target.innerHTML=='AC'){

    string='';
    display.value=(string)

}
else if(event.target.innerHTML=='='){
    string=eval(string);
    display.value=string
}
else{
 string+=event.target.innerHTML;
display.value=string;
}

   





   })
})

