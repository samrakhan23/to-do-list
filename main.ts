#! /usr/bin/env node 

import inquirer from "inquirer";
let toDos = [];

let condition = true;
while (condition){

let toDo = await inquirer.prompt([
  {
    name: "todolist",
    message: "What do you want to add in your To Do List?",
    type: "input",
  },
  {
    name: "answer",
    type: "confirm",
    message: "Are you sure want to add more todos?",
    default: "false"
  },
]);
toDos.push(toDo.todolist);
condition = toDo.answer
console.log(toDos);

}
