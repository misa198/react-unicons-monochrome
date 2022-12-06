import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import url from "@rollup/plugin-url";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        // to css
        extract: true,
        minimize: true,
        modules: {
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      }),
      copy({
        targets: [
          {
            src: ["src/assets/fonts/solid/*.woff2"],
            dest: "dist/fonts/solid",
          },
        ],
      }),
      url({
        include: ["**/*.woff2"],
        limit: Infinity,
        fileName: "[dirname][name][extname]",
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
