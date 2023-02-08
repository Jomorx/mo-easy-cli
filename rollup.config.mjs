// 导入依赖
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";

// tsconfig.json合并选项
// 一般来说默认使用项目的tsconfig.json，如果有个别需要修改的如下，可以在此修改
const override = { compilerOptions: { module: "ESNext" } };

export default {
  // 项目入口
  input: "index.ts",

  // 打包后的出口和设置
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    sourcemap: false,
  },
  // 使用的插件
  // 注意，这里的插件使用是有顺序的，先把ts编译为js，然后查找依赖，最后压缩
  plugins: [
    typescript({ tsconfig: "./tsconfig.json", tsconfigOverride: override }),
    commonjs(),
    // terser(),
    json(),
  ],
};
