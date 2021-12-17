const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Here's the art, and I'm pretty sure it's coded correctly. But it's not displaying properly in the terminal in vscode- I'm not sure why not. Maybe it's just a vscode thing where it doesn't like the backslashes for some reason? I'm not sure
let art = "  ________                __                        __\n" + 
" /_  __/ /_  ____ _____  / /__   __  ______  __  __/ /\n" +
"  / / / __ \/ __ `/ __ \/ / /_/  / / / / __ \/ / / / / /\n" +
" / / / / / / /_/ / / / / ,<   / /_/ / /_/ / /_/ /_/  \n" +
"/_/ /_/ /_/\__,_/_/ /_/_/|_|   \__, /\____/\__,_(_)   \n"+
"                            /____/                  "

console.log("Welcome to the password validator tool! Are you ready to create yet another password to keep track of?")

reader.question("What would you like your new password to be?", function(input){
    tokens = input.split(' ');

    password = tokens[0];
    console.log(`Your password is ${password.length} characters long.`)
    if(password.length >= 10){
        console.log("They say that strength isnt' everything, but here you are, creating the Arnold Schwarzenegger of passwords. Congrats on a strong password.")
    } else if(password.length < 10){
        console.log("Looks like you need to go to the gym- your password is too weak. It must be more than 10 characters in length.")
    }

    reader.close()
    console.log(art)
});
