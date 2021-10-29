function showMenu(navId, ToggleId) {
    const toggle = document.getElementById(ToggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
            //   document.getElementById("welcome").style.display = "none";
            console.log(toggle);
            console.log(nav);
        });
    }
}
showMenu("navmobile", "toggler");

// console.log(toggle);
let i = 0;
let images = [];
let time = 3000;
let quote = [];

// image list
images[0] = "asset/heroimg.png";
images[1] = "asset/2.png";
images[2] = "asset/3.png";
quote[0] =
    "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.";
quote[1] = "Whatever the mind of man can conceive and believe, it can achieve";
quote[2] =
    " Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference";

function changeImg() {
    document.heroImg.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);

    document.getElementById("quote").innerHTML = quote[i];

    if (i < quote.length - 1) {
        i++;
    } else {
        i = 0;
    }
    // setTimeout("printQuote()", time);
}
window.onload = changeImg;

// const togglebtn = document.getElementById("toggler");

// togglebtn.addEventListener("click", console.log("you just clicked me"));
// console.log(togglebtn);