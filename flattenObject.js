let obj = {
    name:"Aman",
    age:32,
    address:{
        city:"Delhi",
        pin:110053
    },
    permanentAddress:{
        state: "Bihar",
        pincode : 854318,
        city:{
            village: "Tiraskund",
            Ward_No :10,
            Police_Station : "Forbesganj"
        }

    }
}

function flattenObj(obj,parent,ans={}){
    for(let key in obj){
        let propname = parent?parent+"_"+key:key;
        if(typeof obj[key] == "object"){
            flattenObj(obj[key],propname,ans);
        }else{
            ans[propname] = obj[key];
        }
    }
    return ans;
}

console.log(flattenObj(obj));