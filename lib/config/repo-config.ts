import { npm, npx } from "../utils";

export const repoConfig: Record<
  string,
  {
    description: string;
    repo?: string;
    shell?: string[];
    needName?: boolean;
  }
> = {
  "mo-react-vite": {
    description: "自己整理的基于vite4+react18+eslint...模板",
    repo: "",
  },
  "mo-vue-vite": {
    description: "自己整理的基于vite4+react18+eslint...模板",
    repo: "https://github.com/Jomorx/vite-vue-template",
  },
  vite: {
    description: "使用vite官方的模板",
    shell: [npm, "create", "vite"],
  },
  "create-react-app": {
    description: "使用cra创建react模板",
    shell: [npx, "create-react-app"],
    needName: true,
  },
  nextjs: {
    description: "使用nextjs官方模板创建next模板",
    shell: [npx, "create-next-app@latest"],
    needName: true,
  },
  nuxtjs: {
    description: "使用cra创建react模板",
    shell: [npx, "create-nuxt-app"],
    needName: true,
  },
};
