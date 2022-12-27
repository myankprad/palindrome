let value = 123;

const  reValue=()=>{
let myRevVal = value.toString().split("").reverse().join("");
let my = value.toString();

if(my == myRevVal ){
    console.log("YES")
}
else{
    console.log("no")
}

};


reValue();
