console.log(" fetch data");

let data=document.getElementById('fetchbtn');
data.addEventListener('click',fetchdata);

function fetchdata()
{
    var xml=new XMLHttpRequest();
    //xml.open('GET','data.txt',true);
    xml.open('POST','http://dummy.restapiexample.com/api/v1/create',true);

    xml.onprogress=function()
    {
        console.log("on progress.........")
    }
    xml.onload=function()
    {
        console.log(this.responseText);
    }
    //let val=`{"name":"subham","roll":"12"}`;
    //xml.send();
}


let databtn=document.getElementById('add');
databtn.addEventListener('click',sitedata);

function sitedata()
{
    //console.log("site");
    var xml=new XMLHttpRequest();
    xml.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
    xml.onprogress=function()
    {
        console.log("on progress.........")
    }
    xml.onload=function()
    {
        if(this.status==200)
        {
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let list=document.getElementById('list');
            //console.log(list)
            str='';
            let key;
            if(key==obj)
            {
                str+=`<li>${obj[key].employee_name}</li>`;

            }list.innerHTML=str;
        }
        else{
            console.log("error................................");
        }
    }
    xml.send();
}
