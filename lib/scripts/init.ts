import { download, pnpm, npm, log } from "../utils";
import inquirer from "inquirer";
import { repoConfig } from "../config/repo-config";
import { spawn } from "child_process";
import chalk from "chalk";
export const initAction = async () => {
  const { repoName } = await inquirer.prompt<{repoName:string}>([
    {
      type: "list",
      name: "repoName",
      message: "请选择模板",
      choices: Object.keys(repoConfig).map(
        (key) => key + "------" + repoConfig[key].description
      ),
    },
  ]);
  //repo对象
  const repo = repoConfig[repoName.split("------")[0]];
  //选择使用vite等构建工具
  if (repo.shell) {
    //需要输入的项目名字
    let projectName = undefined;
    if (repo.needName) {
      // 需要输入名字
      const res = await inquirer.prompt([
        {
          type: "input",
          name: "projectName",
          message: "初始化项目名字",
          default: () => "mo-project",
          validate: (res) => {
            if (!res.trim()) return "项目名字不能为空";
            return true;
          },
        },
      ]);
      projectName = res.projectName;
    }
    // 执行命令
    spawn(
      repo.shell[0],
      projectName
        ? repo.shell.slice(1).concat([projectName])
        : repo.shell.slice(1),
      {
        cwd: `./`,
        stdio: "inherit",
      }
    ).addListener("close", () => {
      log(chalk.blue("🚀初始化项目完成"));
    });
    return;
  }
  // 选择使用模板
  const { projectName, install } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "初始化项目名字",
      default: () => "mo-project",
      validate: (res) => {
        if (!res.trim()) return "项目名字不能为空";
        return true;
      },
    },
    {
      type: "confirm",
      name: "install",
      message: "是否需要下载依赖",
      default: () => false,
    },
  ]);
  //下载模板
  await download(`direct:${repo.repo}#main`, projectName, {
    clone: true,
  });
  if (install)
    spawn(pnpm, ["i"], {
      cwd: `./`,
      stdio: "inherit",
    });
  log(chalk.blue("🚀初始化项目完成"));
};
