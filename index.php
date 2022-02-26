<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<script>
    //alert("Ovo je alert")
    /*if(confirm("Da li ste dobro!!")) alert("Dobro sam!");
    else alert("Nisam dobro");*/
    function izmenaSadrzaja(){
        let a=document.getElementById("drugi")

        a.innerHTML="Ovo je nakon klika na dugme"; //innerHTML koristi se menjanje teksta unutar nekog elementa
        a.style.color="yellow";
        a.style.backgroundColor="red";
    }
    function prebaci(){
        let a=document.getElementById("drugi");
        let b=document.getElementById("tekst1");
        a.innerHTML = b.value;
    }
    function poruka(str){
        alert(str); 
    }
    //poruka("Ovo je poruka iz funkcije!!!");
</script>
<body>
    <h1>Stranic 1</h1>
    <p onclick="poruka('Kliknuli ste na 1. paragraf')">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias recusandae quae ipsum neque est, quidem itaque id a inventore tempore reprehenderit ipsam voluptas optio veniam saepe, corporis rem et!</p><br><br>
    <p onclick="poruka('Kliknuli ste na 1. paragraf')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolor maiores a aut veritatis, hic asperiores nihil eius labore quos corrupti id harum, dolore non accusantium, fugiat quisquam iusto similique.</p><br><br>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, id ipsa, ab quisquam voluptate quasi sint velit cupiditate atque illum quo doloremque esse suscipit vel aperiam dolore, repellendus unde molestias?</div><br><br>
    <div id="drugi">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis omnis quos rem praesentium error exercitationem deleniti repellendus quis, qui illum nisi consequuntur! Minus at temporibus id saepe minima, voluptates eos.</div><br><br>
    <div onclick="poruka('Kliknuli ste na 1. paragraf')">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime consequatur nam libero hic ad dolorem incidunt pariatur vel culpa architecto laboriosam sapiente tempore fuga ab dicta, autem, dolor aperiam.</div><br><br>

    <button type="button" onclick="izmenaSadrzaja()">Klikni me</button><hr>
    <input type="text" id="tekst1" placeholder="Unesite tekst1"><br><br>
    <button type="button" onclick="prebaci()">Klikni me</button>
</body>
</html>