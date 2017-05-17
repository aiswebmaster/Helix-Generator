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

        this.moduleName = this.config.get('configModuleName');
        this.initialNamespace = this.config.get('configInitialNamespace');
        this.moduleType = this.config.get('configModuleType');
        
    }

    init() {
        //this._prompting();
        this.log("Generating Feature '" + this.moduleName + "'");
    }

    _prompting() {

        return this.prompt(prompts).then((answers) => {

        });

    }

    configure() {
        this.projectGuid = '{' + guid.v4() + '}';

        this.targetPath = path.join('Feature', this.moduleName);

        this.log('Feature Target Path: ' + this.targetPath);
    }

    projectSetup() {

        this.fs.copy(
            this.templatePath('Feature/**/*'),
            this.destinationPath(this.targetPath), {
                globOptions: { dot: false }
            }
        );

        // Basic Folder Structure Creation
        mkdirp.sync(path.join(this.targetPath, '/App_Config'));
        mkdirp.sync(path.join(this.targetPath, '/Controllers'));
        mkdirp.sync(path.join(this.targetPath, '/Models'));
        mkdirp.sync(path.join(this.targetPath, '/Views'));

        // csproj
        this.fs.copyTpl(
            this.templatePath('/Feature/code/.Feature.csproj'),
            this.destinationPath(path.join(this.targetPath, this.initialNamespace + '.Feature.' + this.moduleName + '.csproj'))
        )

        // Nuget Package Configuration
        this.fs.copyTpl(
            this.templatePath('/Feature/code/.packages.config'),
            this.destinationPath(path.join(this.targetPath, 'packages.config'))
        );

        // Assembly Info

        // App Configuration + Handle Glass Configuration

        // Determine if Unicorn
    }



}