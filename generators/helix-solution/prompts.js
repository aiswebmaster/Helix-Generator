'use strict';

module.exports = [
    {
        type: 'input',
        name: 'solutionName',
        message: 'Enter the name of your Solution:'
    },
    {
        type: 'input',
        name: 'projectUrl',
        message: 'Enter the Project URL (used for publish targets):'
    },
    {
        type: 'confirm',
        name: 'git',
        message: 'Would you like to preconfigure git?'
    }
]