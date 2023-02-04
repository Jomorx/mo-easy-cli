// const program = require("commander");
import program from "commander";

// const { createProject, addCpnAction, addPageAction,logAction } = require("./actions");
import {
  createProject,
  addCpnAction,
  addPageAction,
  initAction,
} from "./actions";
const createCommands = () => {
  program
    .command("create <project>")
    .description("clone repository into a folder,example: mo create vue")
    .action(createProject);

  program
    .command("addcpn <name>")
    .description("add a component into your project,example: mo addcpn Home")
    .action((name) => addCpnAction(name, program.dest ?? "src/components"));

  program
    .command("addpage <name>")
    .description("add a component into your project,example: mo addcpn Home")
    .action((name) => addPageAction(name, program.dest ?? "src/pages"));
  program
    .command("init <name>")
    .description("add a component into your project,example: mo addcpn Home")
    .action((name) => initAction(name, program.dest ?? "src/pages"));
};
export default createCommands;
