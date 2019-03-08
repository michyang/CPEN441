function animateMenu(x) {

    //animate burger to X and vice versa 
    x.classList.toggle("change");

    //change visibility of menu
    var menu = document.getElementById("menu-wrapper");
    var menu_is_visible = menu.style.visibility;
    menu_is_visible == "visible" ?  menu.style.visibility = "hidden": menu.style.visibility = "visible";
}

window.onload = function () {

    document.getElementById("cwl-btn").addEventListener('click', function(){
        document.getElementById("login-cwl-wrapper").style.visibility = "visible";
    })

    document.getElementById("login-btn").addEventListener('click', function(){
        document.getElementById("dashboard-wrapper").style.visibility = "visible";
        document.getElementById("banner").style.visibility = "visible";
    })

  }