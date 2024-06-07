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
    // answer.framework is calling the item framework from the object Answer, which is created from the question object item "name" which is "frameworks" // Guess
    console.log(`You prefer the ${answer.framework} framework`)
}

askList();