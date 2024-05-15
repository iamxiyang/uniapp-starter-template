import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/uni-helper/vite-plugin-uni-pages
    UniPages({
      dts: './src/types/uni-pages.d.ts',
    }),
    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      dts: './src/types/auto-imports.d.ts',
      include: [
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ['vue', 'pinia', 'uni-app'],
      vueTemplate: true,
    }),
    // https://github.com/uni-helper/vite-plugin-uni-components
    UniHelperComponents({
      dts: './src/types/components.d.ts',
    }),
    uni(),
    // https://github.com/antfu/unocss
    Unocss(),
  ],
})
