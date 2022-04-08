let sideBarButton = document.querySelector(".uil-bars");
let sidebar = document.querySelector(".sidebar");
console.log(sideBarButton);

sideBarButton.addEventListener("click", () => {
    sidebar.classList.toggle("close")
});