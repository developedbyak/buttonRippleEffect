var btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
    var x = (event.pageX - btnEl.offsetLeft);
    var y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
})