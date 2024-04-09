#! /usr/bin/env node
import inquirer from "inquirer";
const accnum = 345279;
let mybalance = 150000;
const input = await inquirer.prompt([
    {
        name: "AccountNo",
        type: "number",
        message: "Enter your Pin number:",
    },
]);
if (input.AccountNo === accnum) {
    console.log("Correct Pin Number");
    let ans = await inquirer.prompt([
        {
            name: "tasks",
            type: "list",
            message: "what do you want to do:",
            choices: ["Transfer Money", "Withdraw", "Check Balance"],
        },
    ]);
    if (ans.tasks == "Transfer Money") {
        const transfer = await inquirer.prompt([
            {
                name: "add",
                type: "number",
                message: "Enter the amount of money you want to add:",
            },
        ]);
        if ("Transfer Money") {
            console.log("\n Updated Balance:");
            console.log(transfer.add + mybalance);
        }
    }
    if (ans.tasks == "Withdraw") {
        const withdraw = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter the amount of money you want to withdraw:",
            },
        ]);
        if ("Withdraw") {
            console.log("\n Updated Balance:");
            console.log(mybalance - withdraw.withdraw);
        }
    }
    if (ans.tasks == "Check Balance") {
        console.log("\n Current Balance:");
        console.log(mybalance);
    }
}
