import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import replace from '@rollup/plugin-replace';

const packageJson = require("../../package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "public/bundle.js",
        format: 'iife',
        name: "bundle.js",
        sourcemap: true,
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "config/dev/tsconfig.json" }),
      postcss(),
      replace({
        preventAssignment: false,
        'process.env.NODE_ENV': '"development"'
      })
    ],
  },
];