const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const open = require("open");
const path = require('path')
const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
const {compile,writeToFile,mkdirSync} = require('../utils/utils')
const createProject = async (project) => {
  console.log("cloning project....");
  await download(`direct:${vueRepo}#main`, project, { clone: true });
  console.log("complete cloning project....");

  console.log("install dependence....");
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(npm, ["i"], { cwd: `./${project}` });
  console.log("complete install dependence....");
  
  commandSpawn(npm, ["run", "dev"], { cwd: `./${project}` });
  console.log("open in browser....");
  open("http://localhost:5173");
};

const addCpnAction =async (name, dest) => {
  const result = await compile("react-component.ejs",{name})
  const targetPath = path.resolve(dest,`${name}.tsx`)
  // console.log(targetPath);
  writeToFile(targetPath,result)
};

const addPageAction = async (name,dest)=>{
  mkdirSync(dest)
  const result = await compile("react-component.ejs",{name})
  const targetPath = path.resolve(dest,`${name}.tsx`)
  writeToFile(targetPath,result)
  const routerResult = await compile("react-router.ejs",{name})
  const routerTargetPath = path.resolve(dest,`router.ts`)
  writeToFile(routerTargetPath,routerResult)
}
module.exports = {
  createProject,
  addCpnAction,
  addPageAction
};
