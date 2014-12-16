var program = require('commander');
var request = require('request');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

module.exports = function WEBSTRUCT() {

    program
        .version('0.0.1')
        .option('-t --type [type]', 'Set the type of application (HTML5 or AngularJS, etc.)')
        .option('-n --name [name]', 'Set the name of the application')
        .command('mkdir [array]', 'Makes the directory structure')
        .parse(process.argv);

    if (!program.args.length) {
        program.help();
    } else {
        switch (program.type) {
            case "html": console.log('building html structure');
                break;
            default : console.log('building default structure');
        }
    }
};cd