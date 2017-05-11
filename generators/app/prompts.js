'use strict';

module.exports = [{
    type: 'list',
    name: 'generatorType',
    message: 'What type of application to you want generated?',
    choices: [
        {
            name: 'Helix Solution',
            value: 'helixSolution'
        },
        {
            name: 'Helix Module',
            value: 'helixModule'
        },
        {
            name: 'Exit',
            value: 'exit'
        }
    ]
},
    {
        type: 'input',
        name: 'initialNamespace',
        message: 'Choose an initial namespace (ie. Sitecore if your project is Sitecore.Foundation.Serialization):',
        required: true,
        default: 'Sitecore'
    }];