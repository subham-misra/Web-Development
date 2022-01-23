document.write("hello world");
console.log("javascript");
console.log(8 + 2);
//var a=alert("Dont click this");
/*var x=prompt("enter the 1st number");
var y=prompt("enter the 2nd number");
var z=parseInt(x)+parseInt(y);
document.write(z);*/
var ans = Math.sqrt(16);

console.log(`the answer is ${ans}`);

//document.getElementById("line").innerHTML=`<h2>subham</h2>`;
document.getElementsByClassName("p1").innerText = "hello";

/*for(var i=0;i<10;i++)
{
    console.log(`${i}`);
}
i=0;
while(i<10)
{
    console.log(`${i}`);
    i++;
}*/

var ch =prompt("enter 1 for add 2 for sub 3 for mult 4 for div");
switch (parseInt(ch)) {
    case 1: var x = prompt("enter the 1st number");
        var y = prompt("enter the 2nd number");
        var z = parseInt(x) + parseInt(y);
        document.write(z);
        break;

    case 2: var x = prompt("enter the 1st number");
        var y = prompt("enter the 2nd number");
        var z = parseInt(x) - parseInt(y);
        document.write(z)
        break;

    case 3:
        var x = prompt("enter the 1st number");
        var y = prompt("enter the 2nd number");
        var z = parseInt(x) * parseInt(y);
        document.write(z);
        break;

    case 4: var x = prompt("enter the 1st number");
        var y = prompt("enter the 2nd number");
        var z = parseInt(x) / parseInt(y);
        document.write(z);
        break;

    default: document.write("error");
}
