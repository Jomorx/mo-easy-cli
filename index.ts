#!/usr/bin/env node
// const program = require('commander')
import program from "commander";
// const helpOptions =require('./lib/core/help')
import helpOptions from "./lib/core/help";
// const createCommands = require('./lib/core/create')
import createCommands from "./lib/core/create";
import PKG from "./package.json";
program.version(PKG.version, "-v, --version");
helpOptions();
createCommands();
program.parse(process.argv);
export default "mo-easy-cli"