const sidebar = document.querySelector("#sidebar");
const sidebtn = document.querySelector("#toggleSidebar");

sidebtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});