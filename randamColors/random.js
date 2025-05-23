
let index = 0;
let color = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown"];


function changColors() {
    document.body.style.backgroundColor = color[index];
    index++;
    if (index >= color.length) {
        index = 0;
    }
}