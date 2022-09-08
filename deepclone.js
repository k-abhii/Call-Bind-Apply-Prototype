let superClone =(object)=>{
    let clonning={};
    Object.keys(object).map((prop)=>{
        if(Array.isArray(object[prop])){
            clonning[prop] =[].concat(object[prop]);

        }else if (typeof object[prop] == "object"){
            clonning[prop] = superClone(object[prop]);
        }else{
            clonning[prop] =object[prop];
        }
        
    })
    return clonning;

}
let obj ={
    name :"Aman",
    age:50,
    innerobj:{
        a:1,
        b:3
    }
}
let cloneObj =superClone(obj);
console.log(obj);
console.log(cloneObj);
cloneObj.innerobj.b=4;
console.log(obj);
console.log(cloneObj);
/*

{ name: 'Aman', age: 50, innerobj: { a: 1, b: 3 } }
{ name: 'Aman', age: 50, innerobj: { a: 1, b: 3 } }
{ name: 'Aman', age: 50, innerobj: { a: 1, b: 3 } }
{ name: 'Aman', age: 50, innerobj: { a: 1, b: 4 } }


*/