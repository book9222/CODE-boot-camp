// const password = prompt("please enter passwors:");
// if (password.length >= 6 ){
//     console.log('Its OK');
// }


// let maximum = prompt("Enter max number");
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);
// let guess = prompt("enter your guess");
// while (guess != targetNum) {
//     if (guess > targetNum) {
//         guess = prompt("too high, enter new guess");
//     } else {
//         guess = prompt("too low, enter new guess");
//     }
// }
// console.log("you win")


const todos = ['Water plants', 'walk a dog'];
let command = prompt("What you want to do?")
while (command !== "quit" && command !== "q") {
    if (command.toLowerCase() === "list") {
        console.log("#############################")
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("#############################")
    }else if (command.toLowerCase() === 'new') {
        const newTodo = prompt("What new todo?");
        todos.push(newTodo);
        console.log(`Add "${newTodo}" to Todo List`);
    }else if(command.toLowerCase() === 'delete') {
        const index = prompt("Which todo to delete?");
        const Dtodo = todos.splice(index, 1);
        console.log(`"${Dtodo}" is deleted`);
    }
    command = prompt("What you want to do now?");
}
console.log("You quit the app");