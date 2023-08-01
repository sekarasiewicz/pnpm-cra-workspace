import { defineConfig } from 'tsup';
import {sassPlugin, postcssModules} from 'esbuild-sass-plugin'

export default defineConfig({
  esbuildPlugins: [sassPlugin({
    filter: /\.module\.scss$/,
    transform: postcssModules({}),
    type: 'style'
  })],
  entry: {
    '.': 'src/index.ts',
  },
  banner: {
    js: "'use client'",
  },
  format: ['cjs', 'esm'],
  external: ['react'],
  dts: true,
});
