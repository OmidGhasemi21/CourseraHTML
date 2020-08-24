
function wonderfulImage() {
    if (document.getElementById("cafe_image").style.opacity == 1) {
        document.getElementById("cafe_image").style.opacity = .3;
        document.getElementById("woderful_button").innerHTML = "Wonderful Image!";
    }
    else {
        document.getElementById("cafe_image").style.opacity = 1;
        document.getElementById("woderful_button").innerHTML = "Turn off!";
    }
}



