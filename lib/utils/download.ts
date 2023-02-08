import Download from "download-git-repo";
import { promisify } from "util";
export const download = promisify(Download);
export const npm = process.platform === "win32" ? "npm.cmd" : "npm";
export const pnpm = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
export const npx = process.platform === "win32" ? "npx.cmd" : "npx";