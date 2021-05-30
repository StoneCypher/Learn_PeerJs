
import nodeResolve from '@rollup/plugin-node-resolve';
import replace     from '@rollup/plugin-replace';
import commonjs    from '@rollup/plugin-commonjs';



export default {

  input: './build/ts/index.js',

  output: {
    dir     : './build/rollup/',
    format  : 'iife',
    name    : 'learn_peerjs',
    exports : 'named'
  },

  plugins : [

    commonjs(),

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.js', '.json', '.ts', '.tsx' ],
      preferBuiltins : false
    }),

    replace({
      preventAssignment : true,
      values            : {
        'process.env.NODE_ENV' : JSON.stringify( 'production' )
      }
    })

  ]

};
