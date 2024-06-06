// 4.6.2024 3:03PM


// Not working
const inquirer = require('inquirer')

async function question() {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            name: 'area',
            message: 'Where do you live?',
            choices: ['Nelson', 'Stoke', 'Richmond']
        }
    ]
    const answers = await inquirer.prompt(questions)
    console.log(`Hi, my name is ${answers.name}! I live in ${answers.area}`)
}

question()