let sideBarButton = document.querySelector(".uil-bars");
let sidebar = document.querySelector(".sidebar");
console.log(sideBarButton);

sideBarButton.addEventListener("click", () => {
    sidebar.classList.toggle("close")
});

let check = document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id = check.checked;
    if(id !== true){
        location.href="es/index.html"
    }else if (id !== false){
        location.href="../sideNav.html"
    }
};