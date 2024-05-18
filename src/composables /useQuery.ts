import type { MaybeRef } from 'vue'

export function useQuery(key?: MaybeRef<string>) {
  const query = ref<AnyObject>({})
  onLoad((q) => {
    query.value = q || {}
  })
  const value = computed(() => (key ? query.value[unref(key)] : null))
  return { query, value }
}
