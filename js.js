function addtext(givenId){
    document.getElementById(givenId).lastElementChild.innerHTML = "Legenda da div "+givenId;
}
function changeimg(givenId){
    document.getElementById(givenId).firstElementChild.src="https://picsum.photos/200?grayscale";
}

function reverseimg(givenId){
    document.getElementById(givenId).firstElementChild.src="https://picsum.photos/200";
}