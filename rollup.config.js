export default {
  input: './src/index.js',
  experimentalCodeSplitting: true,
  experimentalOptimizeChunks: true,
  chunkGroupingSize: 0,
  output: {
    dir: 'dist',
    format: 'esm'
  }
}