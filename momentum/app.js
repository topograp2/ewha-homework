const $hii = document.querySelector(".hello .mii");

function changeColor(){
    
    $hii.classList.toggle("active");
}

$hii.addEventListener("click", changeColor);