#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("============================================"));
console.log(chalk.green("Welcome to my letters and words counter App!"));
console.log(chalk.green("============================================\n"));
let myLoop = true;
while (myLoop) {
    let userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'para',
            message: 'Enter your paragraph to count letter and word in it'
        },
        {
            type: 'list',
            name: 'ask',
            message: 'What do you want to count in your paragraph?',
            choices: ["1. Letters", "2. Words", "3. Both letters and words"]
        }
    ]);
    let { para, ask } = userInput;
    if (para.length === 0)
        emptyInput();
    if (ask === "1. Letters")
        letterFun();
    if (ask === "2. Words")
        wordsFun();
    if (ask === "3. Both letters and words")
        both();
    function emptyInput() {
        console.log(chalk.blue(`You input is empty! please try again with a valid input\n`));
    }
    function letterFun() {
        const lettersWithoutSpaces = para.replace(/\s/g, "");
        let letterCount = lettersWithoutSpaces.length;
        console.log(chalk.blue(`\nTotal letters in your paragraph are "${letterCount}"!`));
    }
    function wordsFun() {
        const wordsArray = para.split(" ");
        const wordCount = wordsArray.length;
        console.log(chalk.blue(`\nTotal words in your paragraph  are "${wordCount}"`));
    }
    function both() {
        letterFun();
        wordsFun();
    }
    let countMore = await inquirer.prompt({
        type: 'confirm',
        name: 'more',
        message: 'Do you want to count more?',
        default: false
    });
    if (!countMore.more) {
        myLoop = false;
        console.log(chalk.magenta(`Thank you for using our letters and words count App!\n`));
    }
}
