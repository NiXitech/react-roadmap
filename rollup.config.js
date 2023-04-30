import RollupPluginMultiInput from 'rollup-plugin-multi-input';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import styles from 'rollup-plugin-styles';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import path from 'node:path';
import { pathToFileURL } from 'url';
import dts from 'rollup-plugin-dts';
import url from 'rollup-plugin-url';
import assets from 'rollup-plugin-assets';
import pkg from './package.json' assert { type: "json" };

const multiInput = RollupPluginMultiInput.default;

const input = [
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.jsx',
]

const output = 'build';

const name = 'react-roadmap';
const { pathname } = pathToFileURL(import.meta.url);
const __dirname = path.dirname(pathname)

const externalDeps = Object.keys(pkg.dependencies || {});
const externalPeerDeps = Object.keys(pkg.peerDependencies || {});

const getPlugins = () => {
    return [
        multiInput(),
        nodeResolve({
            extensions: ['.js', '.ts', '.tsx'],  // 指定可识别的扩展名
            modulesOnly: [
                'node_modules',
                {
                    find: '@',
                    replacement: './src'
                }
            ],
        }),
        commonjs(),
        // esbuild({
        //     include: /\.[jt]sx?$/,
        //     //     target: 'esnext',
        //     minify: true,
        //     //     jsx: 'transform',
        //     //     jsxFactory: 'React.createElement',
        //     //     jsxFragment: 'React.Fragment',
        //     tsconfig: 'tsconfig.json',
        // }),
        babel({
            babelHelpers: 'runtime',
            exclude: /node_modules/,
            extensions: ['.ts', '.tsx'],
        }),
        // terser({
        // }),
        postcss({
            extensions: ['.less', '.css'],
            minimize: true,
            extract: `css/${name}.min.css`
        }),
        styles({
            mode: 'extract'
        }),
        // url(),
        copy({
            targets: [
                {
                    src: 'package.json',
                    dest: output,
                },
                {
                    src: 'src/assets',
                    dest: `${output}`
                }
            ]
        })
    ]
}

// const assetsConfig = {
//     input: [

//     ]
// }

const esmConfig = {
    input,
    plugins: [getPlugins()].concat(terser()),
    external: externalDeps.concat(externalPeerDeps),
    output: {
        name: 'react-roadmap',
        format: 'esm',
        dir: `${output}`,
        sourcemap: true,
        chunkFileNames: '_chunks/dep-[hash].js',
        // exports: 'named',
    },
}

const dtsConfig = {
    input,
    plugins: [getPlugins()].concat(dts()),
    output: {
        dir: `${output}`,
    },
}

export default [dtsConfig, esmConfig];

