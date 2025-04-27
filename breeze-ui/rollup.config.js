import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
      include: '**/*.css',
    }),
    terser(),
  ],
};