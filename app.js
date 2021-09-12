let writerEle = document.body.querySelector(".box");

let number = 22;
let fruit1 = "apple";
let fruit2 = "pear"

if(fruit1==="banana"||fruit2==="pear") {
    writerEle.innerHTML="both of these fruits are true";
}else if(fruit1==="apple"||fruit2==="apple"){
    writerElel.innerHTML="one of the fruits is an apple"
}else{
    writerEle.innerHTML="at least one of these fruits is incorrect";
}