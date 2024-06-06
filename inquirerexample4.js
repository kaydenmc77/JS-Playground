// 6.6.2024 1:59PM

import inquirer from 'inquirer';

async function askPassword() {
    const question = {
        type: 'password',
        name: 'password',
        message: 'Enter your password',
        mask: '*'
    };

    const answer = await inquirer.prompt(question);
    console.log('Password Received')
    console.log(answer)
}

askPassword();