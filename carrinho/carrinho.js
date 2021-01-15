function addPreco(){
    var precototal;
    var p1 = document.getElementById("preco1").innerHTML;
    var p2 = document.getElementById("preco2").innerHTML;
    var p3 = document.getElementById("preco3").innerHTML;


    p1 = p1.replace('€','');
    p1 = parseFloat(p1);

    p2 = p2.replace('€','');
    p2 = parseFloat(p2);

    p3 = p3.replace('€','');
    p3 = parseFloat(p3);
    
    precototal = p1 + p2 + p3;
    precototal = Math.round (precototal*100) / 100;

    precototal = precototal.toString();
    precototal = precototal.split('.');
    
    if(precototal[1] < 10){
        precototal[1] = precototal[1] + "0";
    }

    precototal = precototal + "€";
    
    document.getElementById("teste").innerHTML = precototal;
}