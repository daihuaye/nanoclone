import cjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify-es'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [
    {
      name: 'nanoclone',
      file: 'dist/index.js',
      format: 'umd'
    },
    {
      name: 'nanoclone',
      file: 'dist/index.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    resolve({ jsnext: true }),
    cjs(),
    uglify()
  ]
}
