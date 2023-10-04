import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import replace from '@rollup/plugin-replace';
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const packageJson = require("../../package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "public/bundle.js",
        name: "bundle.js",
        format: 'iife',
        sourcemap: true,
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "config/dev/tsconfig.json" }),
      postcss(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify( 'development' )
      }),
      serve({
        open: true,
        verbose: true,
        contentBase: ["", "public"],
        historyApiFallback: true,
        host: "localhost",
        port: 3000,
        historyApiFallback: true
      }),
      livereload({ port: 3001, delay: 1 }),
    ],
    watch: {
      chokidar: {
        usePolling: true
      },
      buildDelay: 1
    }
  },
];