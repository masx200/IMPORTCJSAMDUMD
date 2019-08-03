import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
export default [
  {
    input: "./src/index.js",
    output: [
      //   {
      //     file: "./dist/index.cjs.min.js",
      //     format: "cjs",
      //     // name: "acorn",
      //     sourceMap: false
      //   },
      {
        file: "./dist/index.esm.min.js",
        format: "esm",
        sourceMap: false
      }
    ],
    plugins: [
      resolve(), // tells Rollup how to find date-fns in node_modules
      commonjs(), // converts date-fns to ES modules
      // production &&
      terser() // minify, but only in production
      //   buble({transforms: {dangerousForOf: true}})
    ]
  },
  {
    input: "./externalmodules/src/index.js",
    output: [
      {
        // {
        file: "./externalmodules/dist/index.esm.min.js",
        format: "esm",
        sourceMap: false
        //   }
      }
    ],
    plugins: [
      resolve(), // tells Rollup how to find date-fns in node_modules
      commonjs(), // converts date-fns to ES modules
      // production &&
      terser() // minify, but only in production
      //   buble({transforms: {dangerousForOf: true}})
    ]
  }
];
