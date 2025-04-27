import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';

export default {
  input: 'index.js',  // Changed to src/index.js for better structure
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true  // Add sourcemaps for debugging
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx']  // Add JSX support
    }),
    babel({ 
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']  // Ensure React JSX is transformed
    }),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
      include: '**/*.css',
      plugins: [autoprefixer()],  // Add vendor prefixes
      config: {
        path: './postcss.config.js'  // Optional PostCSS config file
      }
    }),
    terser(),
  ],
  external: ['react', 'react-dom', 'prop-types']
};