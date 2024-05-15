import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    presetUni({
      attributify: false,
    }),
  ],
  shortcuts: [
    {
      center: 'flex justify-center items-center',
      page: 'w-full h-full min-h-100vh bg-#f2f2f2',
    },
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  content: {
    pipeline: {
      exclude: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
    },
  },
})
