const program = require('commander')

const helpOption=()=>{
    program.option('-p --pages <pages>', '创建新的pages')
    program.option('-d --dest <dest>', 'a destination folder')
    
    program.on('--help',()=>{
        console.log('');
        console.log("Others:");
    })
}
module.exports=helpOption