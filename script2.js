function proveri(){
    let ime = document.querySelector("#ime")
    let prezime = document.querySelector("#prezime")
    let email = document.querySelector("#email")
    let loznika = document.querySelector("#lozinka")
    if(ime.value=="" || prezime.value=="" || email.value=="" || loznika.value==""){
        alert("Svi podaci su OBAVEZNI")
        return false
    }
    else{
        alert("USPESNO snimljeni podaci")
    }
}

function proveri2(){
    let ime = document.querySelector("#ime")
    let prezime = document.querySelector("#prezime")
    let email = document.querySelector("#email")
    let loznika = document.querySelector("#lozinka")

    let ispravno = true

    if(ime.value==""){
        ispravno=false
        ime.style.backgroundColor="red"
    }
    if(prezime.value==""){
        ispravno=false
        prezime.style.backgroundColor="red"
    }

    if(email.value==""){
        ispravno=false
        email.style.backgroundColor="red"
    }

    if(loznika.value==""){
        ispravno=false
        loznika.style.backgroundColor="red"
    }
    if(ispravno) alert("USPESNO snimljeni podaci")
    else alert("Svi podaci su OBAVEZNI")

}

function vrati(obj){
    obj.style.backgroundColor="white"
}

function proveri3(){
    let niz=document.querySelectorAll('input')
    let ispravno = true
    for(let i=0; i<niz.length; i++){
        if(niz[i].value==""){
            ispravno=false;
            niz[i].style.backgroundColor="red"
        }
    }
    if(ispravno) alert("USPESNO snimljeni podaci")
    else alert("Svi podaci su OBAVEZNI")
}