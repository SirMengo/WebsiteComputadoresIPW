let input = document.querySelector('input');

input.addEventListener('keyup', (e) => {
    if(e.keycode == 13){
        console.log(e.target.value);
    }
})

function pesquisa(){
    var pesquisa = document.getElementById("search").value;


};