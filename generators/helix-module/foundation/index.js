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
        this.moduleName = this.config.get('configModuleName');
    }

    init() {
        this._prompting();
    }

    _prompting() {

        return this.prompt(prompts).then((answers) => {

        });

    }

    configure() {

    }

    projectSetup() {

    }

    initialFolders() {

    }

}