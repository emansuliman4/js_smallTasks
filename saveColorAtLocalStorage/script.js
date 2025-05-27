document.addEventListener("DOMContentLoaded", function() {
    let secdiv = document.getElementsByClassName("colorBox")[0];

    function Color(color) {
        secdiv.style.backgroundColor = color;
        window.localStorage.setItem("color", color);
    }

    if (window.localStorage.getItem("color")) {
        secdiv.style.backgroundColor = window.localStorage.getItem("color");
    } else {
        console.log('no');
    }

    window.Color = Color;
});
