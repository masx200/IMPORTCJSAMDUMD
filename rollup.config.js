import babel from "rollup-plugin-babel";
// import sourcemaps from "rollup-plugin-sourcemaps";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-ts";
const beautifyterserplugin = terser({
    compress: false,
    mangle: false,
    output: {
        comments: !1,
        beautify: true
    }
});
const mybabelplugin = babel({
    sourcemap: true,
    plugins: ["@babel/plugin-proposal-optional-catch-binding"],
    presets: [
        [
            "@babel/preset-env",
            {
                targets: [
                    "last 1 edge version",
                    "last 1 safari version",
                    "last 1 chrome version",
                    "last 1 firefox version"
                ]
            }
        ]
    ]
});
const compressionplugin = terser({
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
        plugins: [
            // sourcemaps(),
            json(),
            resolve(),
            commonjs(),
            typescript({}),
            beautifyterserplugin
        ]
    },
    {
        input: "./dist/index.js",
        output: [
            {
                file: "./dist/index.js",
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            mybabelplugin,
            // sourcemaps(),
            json(),
            resolve(),
            commonjs(),
            beautifyterserplugin
        ]
    },
    {
        input: "./dist/index.js",
        output: [
            {
                file: "./dist/index.min.js",
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            // sourcemaps(),
            mybabelplugin,
            resolve(),
            commonjs(),
            json(),
            compressionplugin
        ]
    }
];
