// 6.6.2024 2:24PM

import inquirer from 'inquirer';

async function askRawList() {
    const question = {
        type: 'rawlist',
        name: 'os',
        message: 'Which operating system do you prefer?',
        choices: ['Windows', 'Linux', 'MacOS', 'Other']
    };

    const answer = await inquirer.prompt(question);
    console.log(`You prefer the ${answer.os} OS`)
}

askRawList();