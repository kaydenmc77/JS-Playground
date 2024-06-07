npm install @inquirer/prompts

set type: "module" 
above keywords in package.json

import inquirer from 'inquirer';

For error checking in inquirer question
validate: function() {
    if(yes) {
        return true
    }
    else {
        return "Retry"
    }
}