import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import EslintPlugin from 'vite-plugin-eslint'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
export function createVitePlugins(env) {
  let plugins = [] as any
  // if (env.VITE_DEV) {
  //开发、测试
  plugins = [
    vue(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/],
      dts: 'src/types/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        {
          '@/hooks/useCache': ['useCache'],
          '@/hooks/useMitt': ['useEmitt']
        }
      ],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          // prefix: 'Icon'
        })
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      dts: 'src/types/components.d.ts',
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep']
        }),
        ElementPlusResolver()
      ]
    }),
    Icons({
      autoInstall: true
    }),
    EslintPlugin({
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx'] // 检查的文件
    }),
    WindiCSS()
  ]
  // } else {
  // 生产优化
  // }

  return plugins
}
