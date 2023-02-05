import { promisify } from "util";
import Download from "download-git-repo";
import open from "open";
import path from "path";
import templateRepo from "../config/repo-config";
import { commandSpawn } from "../utils/terminal";
import { compile, writeToFile, mkdirSync } from "../utils/utils";
import { exec } from "shelljs";
import inquirer from "inquirer";
import { spawn } from "child_process";
import { fileURLToPath } from "node:url";
import { execFile } from "child_process";
/**
 * 创建项目
 * @param project 项目名字
 */
const createProject = async (project) => {
  // console.log("cloning project....");
  // await download(`direct:${viteVueRepo}#main`, project, { clone: true });
  // console.log("complete cloning project....");
  // console.log("install dependence....");
  // const npm = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
  // await commandSpawn(npm, ["i"], { cwd: `./${project}` });
  // console.log("complete install dependence....");
  // commandSpawn(npm, ["run", "dev"], { cwd: `./${project}` });
  // console.log("open in browser....");
  // open("http://localhost:5173");
};

const addCpnAction = async (name, dest) => {
  const result = await compile("react-component.ejs", { name });
  const targetPath = path.resolve(dest, `${name}.tsx`);
  // console.log(targetPath);
  writeToFile(targetPath, result);
};

const addPageAction = async (name, dest) => {
  mkdirSync(dest);
  const result = await compile("react-component.ejs", { name });
  const targetPath = path.resolve(dest, `${name}.tsx`);
  writeToFile(targetPath, result);
  const routerResult = await compile("react-router.ejs", { name });
  const routerTargetPath = path.resolve(dest, `router.ts`);
  writeToFile(routerTargetPath, routerResult);
};
const initAction = async (name, dest) => {
  // console.log(4564);
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  spawn(npm, ["init", "vite"], { cwd: `./`, stdio: "inherit" });
  // commandSpawn("npm", ["init", "vite"], { cwd: "./" });
  // const { sel } = await inquirer.prompt([
  //   {
  //     type: "list",
  //     name: "sel",
  //     message: "请选择模板",
  //     choices: Object.keys(templateRepo),
  //   },
  // ]);
  // const { status } = spawn.sync("npm", "create vite", {
  //   stdio: "inherit",
  // });
  // process.exit(status ?? 0)
  // const dir = path.resolve(fileURLToPath(import.meta.url), "../..");
  // download("https://github.com/vitejs/vite/tree/main/packages/create-vite/template-lit-ts","vite",)
  // gitdownFunc(["https://github.com/vitejs/vite/tree/main/packages/create-vite/template-lit-ts"])
  // console.log(dir);

  // console.log(status);
};

export { createProject, addCpnAction, addPageAction, initAction };
