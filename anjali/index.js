var feet=document.getElementById('feet');
var inches=document.getElementById('inches');
// The addEventListener () is an inbuilt function in JavaScript which takes the event to listen for, and a second argument to be called whenever the described event gets fired.
feet.addEventListener('input',function()
{
   
let f=this.value;
let i=f*12;
inches.value=i;
});

inches.addEventListener('input',function()
{
   
let i=  this.value;
let f=  i/12;
feet.value=f;
});
 