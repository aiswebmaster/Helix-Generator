'use strict';

var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var mkdirp = require('mkdirp');
//var guid = require('uuid');
const typePrompts = require('./prompts');

module.exports = class extends Generator {

    constructor(args, opts) { super(args, opts); }

    init() {

        this.log(yosay('Welcome to the ' + chalk.magenta('Sitecore') + ' generator.'));

        this._prompting();

    }

    _prompting() {

        return this.prompt(typePrompts).then((answers) => {

            this.config.set('configInitialNamespace', answers.initialNamespace);

            if (answers.generatorType === 'helixSolution') {
                this.composeWith(require.resolve('../helix-solution'));
            }

            if (answers.generatorType === 'helixModule') {
                this.composeWith(require.resolve('../helix-module'));
            }

            if (answers.generatorType === 'exit') {
                process.exit();
            }

        });
    }
}