import { isRef } from 'vue'
import type { MaybeRef } from 'vue'

export function useTitle(title: MaybeRef<string>) {
  if (isRef(title)) {
    watch(title, (newVal) => {
      uni.setNavigationBarTitle({
        title: unref(newVal),
      })
    }, { immediate: true })
  }
  else {
    uni.setNavigationBarTitle({
      title,
    })
  }
}
