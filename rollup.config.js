
import sourcemaps from "rollup-plugin-sourcemaps";

import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "rollup-plugin-json";
import typescript from "rollup-plugin-typescript2";
const myterserplugin = terser({
  sourcemap: true,
  toplevel: true,
  output: {
    comments: !1,
    ascii_only: !0
  },
  compress: {
    toplevel: true,
    unused: true,
    drop_console: true,
    drop_debugger: true,
    pure_funcs: ["console.log"]
  },
  mangle: { properties: false }
});
export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./dist/index.js",
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [sourcemaps(),
      json(),
      resolve(),
      commonjs(),
      typescript(),
      terser({
        compress: false,
        mangle: false,
        output: {
          comments: !1,
          beautify: true
        }
      })
    ]
  },
  {
    input: "./dist/index.js",
    output: [
      {
        file: "./dist/index.esm.min.js",
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [resolve(), commonjs(), myterserplugin,sourcemaps()]
  }
];
// /* import resolve from "rollup-plugin-node-resolve";
// import commonjs from "rollup-plugin-commonjs";
// import { terser } from "rollup-plugin-terser";
// import json from "rollup-plugin-json";
// const myterserplugin = terser({
//   sourcemap: true,
//   toplevel: true,
//   output: {
//     // ecma: 5,
//     comments: !1,
//     /* 在terserplugin中可以转换成unicode  */
//     ascii_only: !0
//   },
//   compress: {
//     // ecma: 5,
//     // warnings: !1,
//     // comparisons: !1,
//     // inline: 2,
//     drop_console: true,
//     drop_debugger: true,
//     pure_funcs: ["console.log"]
//   },
//   mangle: { properties: false }
// });
// export default [
//   {
//     input: "./src/index.js",
//     output: [
//       //   {
//       //     file: "./dist/index.cjs.min.js",
//       //     format: "cjs",
//       //     // name: "acorn",
//       //     sourceMap: false
//       //   },
//       {
//         file: "./dist/index.esm.js",
//         format: "esm",
//         sourcemap: true
//       }
//     ],
//     plugins: [
//       json(),
//       resolve(), // tells Rollup how to find date-fns in node_modules
//       commonjs(), // converts date-fns to ES modules
//       // production &&
//       //   terser() // minify, but only in production
//       //   buble({transforms: {dangerousForOf: true}})
//       terser({
//         compress: false,

//         /*     {

// drop_console: true,

// } */

//         mangle: false,
//         output: {
//           comments: !1,
//           beautify: true
//         }
//       })
//     ]
//   },
//   //   {
//   //     input: "./externalmodules/src/index.js",
//   //     output: [
//   //       {
//   //         // {
//   //         file: "./externalmodules/dist/index.esm.js",
//   //         format: "esm",
//   //         sourceMap: false
//   //         //   }
//   //       }
//   //     ],
//   //     plugins: [
//   //       json(),
//   //       //   myterserplugin,
//   //       resolve(), // tells Rollup how to find date-fns in node_modules
//   //       commonjs() // converts date-fns to ES modules
//   //       // production &&
//   //       //   terser() // minify, but only in production
//   //       //   buble({transforms: {dangerousForOf: true}})
//   //     ]
//   //   },
//   {
//     input: "./dist/index.esm.js",
//     output: [
//       //   {
//       //     file: "./dist/index.cjs.min.js",
//       //     format: "cjs",
//       //     // name: "acorn",
//       //     sourceMap: false
//       //   },
//       {
//         file: "./dist/index.esm.min.js",
//         format: "esm",
//         sourcemap: true
//       }
//     ],
//     plugins: [
//       json(),

//       resolve(), // tells Rollup how to find date-fns in node_modules
//       commonjs(), // converts date-fns to ES modules
//       // production &&
//       //   terser() // minify, but only in production
//       //   buble({transforms: {dangerousForOf: true}})
//       myterserplugin
//     ]
//   }
//   //   {
//   //     input: "./externalmodules/dist/index.esm.js",
//   //     output: [
//   //       {
//   //         // {
//   //         file: "./externalmodules/dist/index.esm.min.js",
//   //         format: "esm",
//   //         sourceMap: false
//   //         //   }
//   //       }
//   //     ],
//   //     plugins: [
//   //       json(),
//   //       myterserplugin,
//   //       resolve(), // tells Rollup how to find date-fns in node_modules
//   //       commonjs() // converts date-fns to ES modules
//   //       // production &&
//   //       //   terser() // minify, but only in production
//   //       //   buble({transforms: {dangerousForOf: true}})
//   //     ]
//   //   }
// ];
//  */
