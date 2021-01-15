function addPreco(){
    //Declaração das variaveis e associação das mesmas ao calculos que vao fazer
    var precototal;
    var p1 = document.getElementById("preco1").innerHTML;
    var p2 = document.getElementById("preco2").innerHTML;
    var p3 = document.getElementById("preco3").innerHTML;

    //Tirar o simbolo "€" das variaveis e converte-las pra float
    p1 = p1.replace('€','');
    p1 = parseFloat(p1);

    p2 = p2.replace('€','');
    p2 = parseFloat(p2);

    p3 = p3.replace('€','');
    p3 = parseFloat(p3);
    
    //Calculo dos 3 preços numa só variavel e formatação de float para mostrar o preço caso tenha centimos.
    precototal = p1 + p2 + p3;
    precototal = Math.round (precototal*100) / 100;

    //Corte da variavel para depois do ".", identificar se depois desse ponto o num é maior ou igual a 10, case seja
    //adicionar um zero depois, para que a float apresente "exemplo".10 em vez de "exemplo".1
    precototal = precototal.toString();
    precototal = precototal.split('.');
    if(precototal[1] < 10){
        precototal[1] = precototal[1] + "0";
    }

    //Adicionar o simbolo "€" devolta e mostrar calculo no site.
    precototal = precototal + "€";   
    document.getElementById("total").innerHTML = precototal;
}