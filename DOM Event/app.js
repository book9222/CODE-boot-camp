const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("You click V2");
}
btn.onmouseenter = function() {
    console.log("You on V2")
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function() {
    console.log("clicked v3");
})
btn3.addEventListener('click', function() {
    console.log("once");
}, {once : true})