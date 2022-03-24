let btn = document.querySelector(".menu");
let dropMenu = document.querySelector(".links");

btn.onclick = () =>{
    dropMenu.classList.toggle("drop");
}

window.onclick = (event) => {
    if (!event.target.matches(".menu")) {
        if (dropMenu.classList.contains("drop")){
            dropMenu.classList.remove("drop");
        }
    }
}