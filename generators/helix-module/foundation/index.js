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

        this.option('moduleName');
        this.option('initialNamespace');
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