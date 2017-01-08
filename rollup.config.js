import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'mostChunksOf',
  sourceMap: true,
  plugins: [ buble() ]
};
