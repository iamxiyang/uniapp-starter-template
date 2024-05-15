import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/uni-helper/vite-plugin-uni-pages
    UniPages({
      dts: './src/types/uni-pages.d.ts',
    }),
    uni(),
    // https://github.com/antfu/unocss
    Unocss(),
  ],
})
