'use strict';

var Generator = require('yeoman-generator');
var path = require('path');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var guid = require('uuid');

const prompts = require('./prompts');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.option('initialNamespace');

        this.log(this.options.initialNamespace);
    }   

    init() {
        this._prompting();
    }

    _prompting() {

        return this.prompt(prompts).then((answers) => {
            this.moduleName = answers.moduleName;
            this.moduleType = answers.moduleType;

            var optionValues = { options: 
                    { 
                        moduleName: this.moduleName, 
                        initialNamespace: this.options.initialNamespace
                    }
                };

            this.log(optionValues);
            this.log(this.moduleType);

            if (answers.moduleType === 'helixProject') {
                this.composeWith(require.resolve('./project'), { options: { moduleName: answers.moduleName, initialNamespace: this.options.initialNamespace }});
            }

            if (answers.moduleType === 'helixFeature') {
                this.composeWith(require.resolve('./feature'), { options: 
                    { 
                        moduleName: this.moduleName, 
                        initialNamespace: this.options.initialNamespace
                    }
                });
            }

            if (answers.moduleType === 'helixFoundation') {
                this.composeWith(require.resolve('./foundation'), { options: { moduleName: answers.moduleName, initialNamespace: this.options.initialNamespace }});
            }
        });

    }

    configure() {

    }
}