fimport { resolve } from 'path'

export default{
  base: '/https://github.com/Roachkinq21/HOM_Website.git',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}
