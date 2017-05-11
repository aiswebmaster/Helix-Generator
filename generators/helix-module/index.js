'use strict';

var Generator = require('yeoman-generator');
var path = require('path');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var guid = require('node-uuid');

const prompts = require('prompts');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.option('initialNamespace');
    }

    init() {
        this.log('Helix Module');
    }

    prompting() {

        return this.prompt(prompts).then((answers) => {
            this.moduleName = answers.moduleName;
            this.moduleType = answers.moduleType;

            if (answers.moduleType === 'helixProject') {
                this.composeWith(require.resolve('/project'), [ answers.moduleName, this.options.initialNamespace ]);
            }

            if (answers.moduleType === 'helixFeature') {
                this.composeWith(require.resolve('/feature'), [ answers.moduleName, this.options.initialNamespace ]);
            }

            if (answers.moduleType === 'helixFoundation') {
                this.composeWith(require.resolve('/foundation'), [ answers.moduleName, this.options.initialNamespace ]);
            }

            this.log('Module:' + this.moduleName + ' - ' + this.moduleType);
        });

    }

    configure() {

    }
}