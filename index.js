import chalk from 'chalk'

import { spawnSync } from "child_process";
import { getExePath } from "@pkl-community/pkl"

const fileRegex = /\.pkl$/;

export default function (conf) {
  return {
    name: "vite-plugin-pkl",

    async transform(src, id) {
      if (fileRegex.test(id)) {
        let args = ['eval', '-f', 'json', id];
        let result = await spawnSync(getExePath(), args, { encoding: 'utf8' })
        if(conf?.debug){
          console.log()
          console.log("🥒", chalk.green("[PKL Compiler]"))
          console.log(id);
          console.log()
          console.log(chalk.yellow("Raw PKL:"));
          console.log(src)
          console.log()
          console.log(chalk.yellow("Transformed JSON:"));
          console.log(JSON.parse(result.stdout))
          console.log()
        }

        let json = result.stdout
        const transformedCode = `const data = ${json}export default data`;

        return {
          code: json,
          map: null, 
        };
      }
    },
  };
}

