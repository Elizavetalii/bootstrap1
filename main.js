const clone1=() => {
    const a = document.getElementById("EL1")
    const b = a.cloneNode(true)
    const c = document.querySelector(".first")
    c.after(b)
}
const clone2=() => {
    const a = document.getElementById("EL2")
    const b = a.cloneNode(true)
    const c = document.querySelector(".second")
    c.after(b)
}
const clone3=() => {
    const a = document.getElementById("EL3")
    const b = a.cloneNode(true)
    const c = document.querySelector(".third")
    c.after(b)
}
const img1 = document.getElementById("one")
const img2 = document.getElementById("two")
const addhorse=() => {
    const horses = document.querySelector(".horses")
    if(horses.childElementCount % 2 == 0) {
        horses.appendChild(img1.cloneNode(true))
    }
    else{
        horses.appendChild(img2.cloneNode(true))
    }
}
const deletehorse = () => {
    const horses = document.querySelector(".horses");
    const images = horses.querySelectorAll("img");
    const lastImage = images[images.length - 1];
    if (lastImage) {
        lastImage.remove();
    }
}

