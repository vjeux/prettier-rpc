import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

const version = 
  process.env.rpc ? 'rpc' : 
  process.env.lib ? 'lib' : 
  process.env.cli ? 'cli' : 'invalid';

if (version === 'invalid') {
  throw new Error('Provide a valid output version via --environment');
}

export default {
  entry: `prettier-${version}.js`,
  dest: `dist/prettier-${version}-${require('./package.json').dependencies.prettier}.min.js`,
  format: 'cjs',
  plugins: [
    json(),
    commonjs(),
    resolve(),
  ],
  useStrict: false,
  external: ['assert', 'fs', 'process'],
};
