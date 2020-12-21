function singSong() {
    console.log("Yay Yay Yay");
}

function greet(person) {
    console.log(`Hello, ${person}`)
}
function greet2(firstName, lastName) {
    console.log(`My name is ${firstName} ${lastName[0].toUpperCase()}.`)
}

function add(num1, num2) {
    return num1 + num2;
}

function splitWord(word) {
    for(let i of word) {
        console.log(i);
    }
}