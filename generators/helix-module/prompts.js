'use strict';

module.exports = [
    {
        type: 'input',
        name: 'moduleName',
        message: 'Enter the name of your module:'
    },
    {
        type: 'list',
        name: 'moduleType',
        message: 'Choose the type for the module (Project/Feature/Foundation):',
        choices: [
            {
                name: 'Project',
                value: 'helixProject'
            },
            {
                name: 'Feature',
                value: 'helixFeature'
            },
            {
                name: 'Foundation',
                value: 'helixFoundation'
            }
        ]
    }];