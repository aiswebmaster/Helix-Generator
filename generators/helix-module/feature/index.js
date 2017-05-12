'use strict';

var Generator = require('yeoman-generator');
var path = require('path');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var guid = require('uuid');

//const prompts = require('./prompts');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.option('moduleName');
        this.option('initialNamespace');

        
    }

    init() {
        //this._prompting();
        this.log("Generating Feature '" + this.options.moduleName + "'");
    }

    _prompting() {

        return this.prompt(prompts).then((answers) => {

        });

    }

    configure() {
        this.projectGuid = '{' + guid.v4() + '}';

        this.targetPath = path.join('Feature', this.options.moduleName, 'src');

        this.log('Feature Target Path: ' + this.targetPath);
    }

    projectSetup() {
        this.fs.copyTpl(this.templatePath('/Feature**'),
        this.destinationPath(this.targetPath),
        { globOptions: {dot: false } });
    }

}