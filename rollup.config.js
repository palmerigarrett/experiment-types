import eslint from '@rollup/plugin-eslint';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import analyze from 'rollup-plugin-analyzer';

export default {
  input: ['src/index.ts'],
  output: [
    {
      dir: 'esm',
      format: 'esm',
      exports: 'named'
    },
    {
      dir: 'cjs',
      format: 'cjs',
      exports: 'named'
    }
  ],
  plugins: [
    analyze(),
    peerDepsExternal(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    eslint(),
    terser(),
    visualizer()
  ]
};
