function addNewWefield() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows", 3);

    let weOb = document.getElementById("we");
    let weaddbuttonOb = document.getElementById("weaddbutton");

    weOb.insertBefore(newNode, weaddbuttonOb);
}
function addNeWfield() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows", 3);

    let aqOb = document.getElementById("aq");
    let aqaddbuttonOb = document.getElementById("aqaddbutton");

    aqOb.insertBefore(newNode, aqaddbuttonOb);
}
function generateCV() {
    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = namefield;

    document.getElementById("nameT2").innerHTML = namefield;
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;
    document.getElementById("gT").innerHTML = document.getElementById("gitfield").value;
    document.getElementById("linkT").innerHTML = document.getElementById("linkfield").value;

    //objective

    document.getElementById("obT").innerHTML = document.getElementById("obfield").value;

    //work experience

    let wes=document.getElementsByClassName("wefield");
    let str="";
    for(let e of wes){
        str=str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //aq
    let aqs=document.getElementsByClassName("aqfield");
    let str1="";
    for(let e of aqs){
        str1= str1+ `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}
    //print

function printCV(){
    window.print();
}

