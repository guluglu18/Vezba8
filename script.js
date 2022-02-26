function prebojTagove(){
    let niz = document.getElementsByTagName('div') //dohvatam sve elemente sa DIVom
    alert("Broj elemenata sa div tagom: " + niz.length) 
}
function prebojKlase(){
    let niz1 = document.getElementsByClassName('klasa1') //dohvatam sve elemente sa CLASSe
    alert("Broj elemenata sa klasom klasa1: " + niz1.length) 
    for(let i=0; i<niz1.length; i++){
        niz1[i].style.border="2px solid black";

    }
}

function novo(){
    let niz = document.querySelectorAll('.klasa1')
    //alert("Broj elemenata sa klasom klasa1: " + niz.length) 
    for(let i=0; i<niz.length; i++){
        niz[i].style.border="2px solid black";

    }
}

function novo1(){
    let niz = document.querySelectorAll('p')
    //alert("Broj elemenata sa klasom klasa1: " + niz.length) 
    for(let i=0; i<niz.length; i++){
        niz[i].style.border="2px solid red";

    }
}

function jedan(){
    let a=document.querySelector('#drugi')
    a.innerHTML="Ovo je sa CSS selektorom";

}

function promeni(obj){
    obj.style.border="2px solid red";
}

function vrati(obj){
    obj.style.border="";
}
