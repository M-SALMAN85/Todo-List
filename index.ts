#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


let todoList: string [] = [];
let condition = true;

let first = async () => {
    while(condition){
        let listOne = await inquirer.prompt([
            {
                message: "Select One Option",
                type: "list",
                name: "choice",
                choices: ["Add", "Remove", "Update", "view", "Exit"],
            }
        ]);
        if (listOne.choice === "Add"){
            await addTask()
        }
        else if (listOne.choice === "Remove"){
            await removeItem()
        }
        else if (listOne.choice === "Update"){
            await updateItem()
        }
        else if (listOne.choice === "view"){
            await viewList()
        }
        else if (listOne.choice === "Exit"){
            condition = false;
        }      
    }
}
let addTask = async () => {
    let addList = await inquirer.prompt([
        {
            message: "what would you want to add in your todo?",
            type: "input",
            name: "put",

        }
    ]);
    todoList.push(addList.put);
    console.log(chalk.bgGreen.bold(`\n ${addList.put} List Item Put Successfully `));
}
let viewList = async () => {
    console.log("\n Your List \n");
    todoList.forEach((task, index) => {
        console.log(chalk.bgBlue.italic(` ${index + 1}: ${task}`))
    })
}
let removeItem = async () => {
    await viewList()
    let removeList = await inquirer.prompt([
        {
            message: "Enter The 'index no' of the list you want to Remove:",
            type: "number",
            name: "index",
        }
    ]);
    let deleteItem = todoList.splice(removeList.index - 1, 1);
    console.log(`\n ${deleteItem} This Item Remove Successfully\n`);
}
let updateItem = async () => {
    await viewList()
    let updateList_task_index = await inquirer.prompt([
        {
            message: "Enter Index No.",
            type: "number",
            name:"index",
            // choices: todoList.map(item => item)
        },
        {
                message: "what would you want to Update in Your todo?",
                type: "input",
                name: "putItem_task",
    
        }
    ]);
    
    
       todoList[updateList_task_index.index - 1] = updateList_task_index.putItem_task 
    console.log(`\n Task at index No. ${updateList_task_index.index} Successfully Updated [for updated list check option: "view"]`);
   
}
first();



// let fruitList = ["apple", "Mango", "Banana"]
// fruitList.push("Orange")
// fruitList.pop()
// fruitList = fruitList.concat(["orange", "juice"]);

// console.log(fruitList)
// let ramadanDays = 0;

// while(ramadanDays<= 10){
//     console.log(ramadanDays);
//     ramadanDays++;
// }

