import RollupPluginMultiInput from 'rollup-plugin-multi-input';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import styles from 'rollup-plugin-styles';
import terser from '@rollup/plugin-terser';


const multiInput = RollupPluginMultiInput.default;

const input = [
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.jsx',
]

const output = 'build';

const name = 'react-roadmap';

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
        // commonjs(),
        // esbuild({
        //     include: /\.[jt]sx?$/,
        //     target: 'esnext',
        //     minify: false,
        //     jsx: 'transform',
        //     jsxFactory: 'React.createElement',
        //     jsxFragment: 'React.Fragment',
        //     tsconfig: 'tsconfig.json',
        // }),
        babel({
            babelHelpers: 'runtime',
            exclude: /node_modules/,
            extensions: ['.ts', '.tsx'],
        }),
        terser(),
        postcss({
            extensions: ['.less', '.css'],
            minimize: true,
            extract: `${name}.min.css`
        }),
        styles({
            mode: 'extract'
        })
    ]
}


const esmConfig = {
    input,
    plugins: getPlugins(),
    output: {
        format: 'esm',
        dir: `${output}`,
        sourcemap: true,
    }
}

export default [esmConfig];

