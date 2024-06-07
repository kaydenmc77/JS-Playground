// Imports the inquirer question module
import inquirer from 'inquirer';
// Imports the file system promise module
import fs from 'fs/promises';
// Imports the path module
import path from 'path';

// Defines an asychronous function call getHealthRecord
async function getHealthRecord() {
    // Defines an array of objects that will be individual terminal questions
    const questions = [
        {
            // Sets the type as "input" for basic terminal string input
            type: 'input',
            // Gives it the name "name"
            name: 'name',
            // Writes a message to the terminal
            message: 'What is your name?',
            // Defines an error checking function that parses the terminal answer
            validate: function(value) {
                // Checks if the answer without white space is 0 characters long
                if (value.trim().length === 0) {
                    // Returns a message to ask the user to retry
                    return 'Please enter a valid name';
                }
                // If the length of the answer is a character or more, it is accepted as a valid input and returns true to continue the function
                return true;
            }
        },
        {
            // Sets the type as "input" for basic terminal string input
            type: 'input',
            // Sets the name as "age"
            name: 'age',
            // A message to be written to the terminal
            message: 'What is your age?',
            // Defines an error checking function that parses the terminal answer
            validate: function(value) {
                const age = parseInt(value, 10);
                if (isNaN(age) || age <= 0) {
                    return 'Please enter a valid age';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'height',
            message: 'What is your height (in cm)?',
            validate: function(value) {
                const height = parseFloat(value);
                if (isNaN(height) || height <= 0) {
                    return 'Please enter a valid height';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'weight',
            message: 'What is your weight (in kg)?',
            validate: function(value) {
                const weight = parseFloat(value);
                if (isNaN(weight) || weight <= 0) {
                    return 'Please enter a valid weight';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'medicalConditions',
            message: 'Do you have any medical conditions? (comma-separated)',
            validate: function(value) {
                if (value.trim().length === 0) {
                    return 'Please enter any medical conditions, or type "None"';
                }
                return true;
            }
        }
    ];

    const healthRecord = await inquirer.prompt(questions);
    return healthRecord;
}

// Comment until here

async function saveHealthRecords(records, filePath) {
    try {
        const data = JSON.stringify(records, null, 2);
        await fs.writeFile(filePath, data, 'utf8');
        console.log(`Health records saved to ${filePath}`);
    } catch (error) {
        console.error('Error saving health records:', error);
    }
}

async function main() {
    const healthRecords = [];
    let addMore = true;

    while (addMore) {
        const record = await getHealthRecord();
        healthRecords.push(record);

        const { continueAdding } = await inquirer.prompt({
            type: 'confirm',
            name: 'continueAdding',
            message: 'Do you want to add another record?',
            default: true
        });

        addMore = continueAdding;
    }

    console.log('Health Records:');
    healthRecords.forEach((record, index) => {
        console.log(`\nRecord ${index + 1}:`);
        console.log(`Name: ${record.name}`);
        console.log(`Age: ${record.age}`);
        console.log(`Height: ${record.height} cm`);
        console.log(`Weight: ${record.weight} kg`);
        console.log(`Medical Conditions: ${record.medicalConditions}`);
    });

    // Save health records to a local file
    const filePath = path.join(process.cwd(), 'healthRecords.json');
    await saveHealthRecords(healthRecords, filePath);
}

main();