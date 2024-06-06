// 6.6.2024 1:40PM

import inquirer from 'inquirer';

async function askCheckbox() {
    const question = {
        type: 'checkbox',
        name: 'languages',
        message: 'Which programming languages do you know?',
        choices: [ 'JavaScript', 'Python', 'Java', 'C++', 'Ruby'
        ]
    };

    const answer = await inquirer.prompt(question);
    
    console.log(`You know the following languages: ${answer.languages.join(', ')}.`)
}

askCheckbox();