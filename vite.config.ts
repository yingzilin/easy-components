//  @ts-ignore
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import progress from 'vite-plugin-progress'
import ViteRestart from 'vite-plugin-restart'

const resolvePath = (str: string) => resolve(__dirname, str)

export default defineConfig({
  plugins: [
    vue(),
    progress(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    ViteRestart({
      restart: ['vite.config.[jt]s']
    })
  ],
  //启动服务配置
  server: {
    host: '0.0.0.0', // 指定服务器主机名
    port: 3030, // 指定服务器端口
    strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
    https: false, // 是否开启 https
    open: true,
    hmr: true,
    proxy: {
      '/customer_applet': {
        target: 'http://customer.geeclo.com/customer_applet', //对mock进行代理，为了区别非mock的代理
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/customer_applet/, '')
      }
    }
  },
  build: {
    lib: {
      entry: resolvePath('./src/packages/index.ts'),
      name: 'easy-components',
      fileName: (format) => `easy-components.${format}.ts`
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          elementPlus: 'element-plus'
        }
      },
      plugins: [
        // typescript({
        //   target: "es2015", // 这里指定编译到的版本，
        //   rootDir: resolvePath("./src/packages/"),
        //   declaration: true,
        //   declarationDir: resolvePath("dist"),
        //   exclude: resolvePath("node_modules/**"),
        //   allowSyntheticDefaultImports: true,
        // }),
      ]
    },
    outDir: 'easy-components', // 指定输出路径
  }
})
