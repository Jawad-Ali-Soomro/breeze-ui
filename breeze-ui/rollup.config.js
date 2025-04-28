import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js', // your entry point
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm', // for modern bundlers
      sourcemap: false,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // for Node.js
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-react'] }),
    terser()
  ],
  external: ['react', 'react-dom'],
};
