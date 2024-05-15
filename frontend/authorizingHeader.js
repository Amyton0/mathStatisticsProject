let username = localStorage.getItem("login");
if (username) {
    document.getElementById("header_username").textContent = username;
    document.getElementById("drop-down_content").style.display = "block";
} else {
    document.getElementById("header_username").textContent = 'Войти';
    document.getElementById("drop-down_content").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    let linkElement = document.getElementById("header_username");
    
    linkElement.addEventListener("click", function(event) {
        if (linkElement.innerText !== "Войти") { 
            event.preventDefault(); // предотвращаем переход по ссылке
        }
    });
});

function logout() {
    localStorage.clear();
    location.reload();
}
