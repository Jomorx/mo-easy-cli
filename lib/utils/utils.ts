import ejs from "ejs";
import path from "path";
import fs from "fs";
import { promisify } from "util";
const renderFilePromise = promisify(ejs.renderFile);
const compile = async (templateName, data) => {
  const templatePosition = `../templates/${templateName}`;
  const templatePath = path.resolve(__dirname, templatePosition);
  return await renderFilePromise(templatePath, { data }, {});
};
const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content);
};

const mkdirSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    // 不存在,判断父亲文件夹是否存在？
    if (mkdirSync(path.dirname(dirname))) {
      // 存在父亲文件，就直接新建该文件
      fs.mkdirSync(dirname);
      return true;
    }
  }
};
export { compile, writeToFile, mkdirSync };
