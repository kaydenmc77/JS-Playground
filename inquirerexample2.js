// 6.6.2024 1:00PM

import inquirer from 'inquirer';

async function askConfirmation() {
    const question = {
        type: 'confirm',
        name: 'proceed',
        message: 'Do you want to continue?',
        default: false
    };

    const answer = await inquirer.prompt(question);
    if(answer.proceed) {
        console.log('You chose to proceed');
    } else {
        console.log('You chose not to proceed');
    }
}

askConfirmation();