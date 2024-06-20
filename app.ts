#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log("\n")
console.log(chalk.yellow("************* Adventure Game *************"))
console.log("\n")


class Player {
    name: string;
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    fuel_Decrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel
    }
    fuel_Increase() {
        this.fuel = 100
    }
}

class Opponent {
    name: string;
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }
    fuel_Decrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.magenta("Enter Your Name"),
        validate:(input) => {
            if(input.trim() === ""){
                return chalk.red("Please Enter Your Name!")
            }
            if(!(isNaN(input))){
                return chalk.red("Please Enter a Valid Name!")
            }
            return true;
        }
    }
])

let opponent = await inquirer.prompt([
    {
        name: "opponents",
        type: "list",
        message: chalk.magenta("Select Your Opponent"),
        choices: ["Skeleton", "Alien", 'Zombie']
    }
])

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.opponents);

do {
    //Skeleton
    if (opponent.opponents === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.magenta("What would you like to do?"),
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ])

        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuel_Decrease()
                console.log(chalk.blue(`${chalk.yellow(p1.name)} Fuel is ${chalk.yellow(p1.fuel)}`));
                console.log(chalk.blue(`${chalk.yellow(o1.name)} Fuel is ${chalk.yellow(o1.fuel)}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red("You Loose, Better Luck For Next Time :("))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuel_Decrease()
                console.log(chalk.blue(`${chalk.yellow(p1.name)} Fuel is ${chalk.yellow(p1.fuel)}`));
                console.log(chalk.blue(`${chalk.yellow(o1.name)} Fuel is ${chalk.yellow(o1.fuel)}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green("************ You Win ************"))
                    process.exit()
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fuel_Increase();
            console.log(chalk.blue(`You Drink Health Portion Your Fuel is ${chalk.yellow(p1.fuel)}`))
        }
        if (ask.opt === "Run For Your Life") {
            console.log(chalk.red("You Loose, Better Luck For Next Time"))
            process.exit()
        }
    }
    //Alien
    if (opponent.opponents === "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.magenta("What would you like to do?"),
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ])

        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuel_Decrease()
                console.log(chalk.blue(`${chalk.yellow(p1.name)} Fuel is ${chalk.yellow(p1.fuel)}`));
                console.log(chalk.blue(`${chalk.yellow(o1.name)} Fuel is ${chalk.yellow(o1.fuel)}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red("You Loose, Better Luck For Next Time :("))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuel_Decrease()
                console.log(chalk.blue(`${chalk.yellow(p1.name)} Fuel is ${chalk.yellow(p1.fuel)}`));
                console.log(chalk.blue(`${chalk.yellow(o1.name)} Fuel is ${chalk.yellow(o1.fuel)}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green("************ You Win ************"))
                    process.exit()
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fuel_Increase();
            console.log(chalk.blue(`You Drink Health Portion Your Fuel is ${chalk.yellow(p1.fuel)}`))
        }
        if (ask.opt === "Run For Your Life") {
            console.log(chalk.red("You Loose, Better Luck For Next Time"))
            process.exit()
        }
    }
    //Zombie
    if (opponent.opponents === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.magenta("What would you like to do?"),
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ])

        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2)
            if (num > 0) {
                p1.fuel_Decrease()
                console.log(chalk.blue(`${chalk.yellow(p1.name)} Fuel is ${chalk.yellow(p1.fuel)}`));
                console.log(chalk.blue(`${chalk.yellow(o1.name)} Fuel is ${chalk.yellow(o1.fuel)}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red("You Loose, Better Luck For Next Time :("))
                    process.exit()
                }
            }
            if (num <= 0) {
                o1.fuel_Decrease()
                console.log(chalk.blue(`${chalk.yellow(p1.name)} Fuel is ${chalk.yellow(p1.fuel)}`));
                console.log(chalk.blue(`${chalk.yellow(o1.name)} Fuel is ${chalk.yellow(o1.fuel)}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green("************ You Win ************"))
                    process.exit()
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.fuel_Increase();
            console.log(chalk.blue(`You Drink Health Portion Your Fuel is ${chalk.yellow(p1.fuel)}`))
        }
        if (ask.opt === "Run For Your Life") {
            console.log(chalk.red("You Loose, Better Luck For Next Time"))
            process.exit()
        }
    }

}
while (true);