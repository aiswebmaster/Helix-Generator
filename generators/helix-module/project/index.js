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
        this.moduleType = this.config.get('configModuleType');
    }

    init() {
        this._prompting();
    }

    _prompting() {

        return this.prompt(prompts).then((answers) => {

        });

    }

    configure() {
        this.projectGuid = '{' + guid.v4() + '}';

        this.targetPath = path.join('Project', this.moduleName, 'src');
        this.log('Project Target Path: ' + this.targetPath);
    }

    projectSetup() {
        this.fs.copyTpl(this.templatePath('/Project/**'),
            this.destinationPath(this.targetPath),
            { globOptions: { dot: false } });
    }

    initialFolders() {

        //mkdirp.sync(path.join(this.targetPath, 'tests'));
        mkdirp.sync(path.join(this.targetPath, '/App_Config/Include/zzz.' + this.initialNamespace + 'Feature.' + this.moduleName));

    }

}