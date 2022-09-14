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