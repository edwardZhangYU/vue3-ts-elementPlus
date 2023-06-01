import { resolve } from "path"
import { loadEnv } from "vite"
import type { UserConfig, ConfigEnv } from "vite"
import { createVitePlugins }  from './config/index'
import { include } from './config/optimize'
// 当前执行node命令时文件夹的地址(工作目录)
const root = process.cwd()
function pathResolve(dir: string) {
  return resolve(root, ".", dir)
}
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  let env = {} as any
  const isBuild = command === "build"
  if (!isBuild) {
    env = loadEnv(
      process.argv[3] === "--mode" ? process.argv[4] : process.argv[3],
      root
    )
  } else {
    env = loadEnv(mode, root)
  }
  // console.log('env:', env)
  return {
    plugins: createVitePlugins(env),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/var.scss";',
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      extensions: [
        ".mjs",
        ".js",
        ".ts",
        ".jsx",
        ".tsx",
        ".json",
        ".scss",
        ".css",
      ],
      alias: [
        {
          find: /\@\//,
          replacement: `${pathResolve("src")}/`,
        },
      ],
    },
    build: {
      minify: 'terser',
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: env.VITE_SOURCEMAP === 'true' ? 'inline' : false,
      // brotliSize: false,
      terserOptions: {
        compress: {
          drop_debugger: env.VITE_DROP_DEBUGGER === 'true',
          drop_console: env.VITE_DROP_CONSOLE === 'true'
        }
      },
      rollupOptions: {
        onwarn(warning){
          if(warning.code === 'EVAL') return
        }
      }
    },
    optimizeDeps: { include }
  };
};
