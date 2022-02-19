console.log("hello");
let x=new Date();
console.log(x.getHours());

function abc()
{
    console.log("function");
}
//abc();

let para=document.getElementById("line");
let btn=document.getElementById("btn");
//console.log(btn);
btn.addEventListener("click",subham);

function subham()
{
    if(para.style.display!="none")
    {
        para.style.display="none";
        console.log("none");
    }
    else
    {
        para.style.display="block";
        console.log("block");
    }
}