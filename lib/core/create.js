const program = require('commander')

const {createProject,addCpnAction,addPageAction} = require('./actions')

const createCommands =()=>{
    program
    .command('create <project>')
    .description('clone repository into a folder,example: mo create vue')
    .action(createProject)


    program
    .command('addcpn <name>')
    .description('add a component into your project,example: mo addcpn Home')
    .action((name)=>addCpnAction(name,program.dest??'src/components'))

    program
    .command('addpage <name>')
    .description('add a component into your project,example: mo addcpn Home')
    .action((name)=>addPageAction(name,program.dest??'src/pages'))
}
module.exports=createCommands