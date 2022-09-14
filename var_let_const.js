//var is function scope 
function fn (){
    var a=10;
    console.log("line 4->a ->",a);
    a++;
    if(true){
        console.log("line 7->a ->",a);
        var a =30;
        console.log("line 9 ->a->",a);
    }
    console.log("Line 11 ->a->",a);
}
fn();
/// chahe aap varible redeclare kar do but ek function me wo ek hi bna rahta h -> var ke case me 
// let and const are block scope 
// block-> space between two curly  braces is known as block {}


//Ctrl+Shift+P to open your command palette and choose Select Emoji.
// Search your emoji and click the emoji you want to use then Ctrl+V to paste it where you want
let fruits ="apple";
{
    { 
        let fruits ="orange";
        {
            {
               console.log(fruits);
            }
            console.log(fruits);
        }
        console.log(fruits);
    }
    console.log(fruits);
}
console.log(fruits);