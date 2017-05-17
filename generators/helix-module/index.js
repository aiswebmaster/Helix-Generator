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

        this.initialNamespace = this.config.get('configInitialNamespace');

        this.log(this.initialNamespace);
    }   

    init() {
        this._prompting();
    }

    _prompting() {

        return this.prompt(prompts).then((answers) => {

            this.config.set('configModuleName', answers.moduleName);
            this.config.set('configModuleType', answers.ModuleType);

            if (answers.moduleType === 'helixProject') {
                this.composeWith(require.resolve('./project'));
            }

            if (answers.moduleType === 'helixFeature') {
                this.composeWith(require.resolve('./feature'));
            }

            if (answers.moduleType === 'helixFoundation') {
                this.composeWith(require.resolve('./foundation'));
            }
        });

    }

    configure() {

    }
}