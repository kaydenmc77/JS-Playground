// 6.6.2024 2:16PM

import inquirer from 'inquirer';

async function askList() {
    const question = {
        type: 'list',
        name: 'framework',
        message: 'Which framework do you prefer?',
        choices: ['React', 'Vue', 'Angular', 'Svelte']
    };

    const answer = await inquirer.prompt(question);
    console.log(`You prefer the ${answer.framework} framework`)
}

askList();