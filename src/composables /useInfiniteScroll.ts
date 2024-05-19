import { computed, onMounted, ref } from 'vue'
import { onReachBottom } from '@dcloudio/uni-app'
import type { PageData } from '@/types/request'

export type Service<TData extends PageData> = (currentData?: TData) => Promise<TData>

export interface InfiniteScrollResult<TData extends PageData> {
  data: TData
  loading: boolean
  loadingMore: boolean
  error?: Error
  noMore: boolean
  loadStatus: string // 提供给 load-more 组件的状态
  loadMore: () => void
  loadMoreAsync: () => Promise<TData>
  reload: () => void
  reloadAsync: () => Promise<TData>
  mutate: (data?: TData) => void
}

export default function useInfiniteScroll<TData extends PageData>(
  service: Service<TData>,
) {
  const finalData = ref<TData>()

  const loading = ref(false)
  const loadingMore = ref(false)

  const noMore = computed(() => {
    return finalData.value?.records && (finalData.value?.page || 0) * (finalData.value?.size || 1) >= (finalData.value?.total || 0)
  })

  const runAsync = async (lastData?: TData) => {
    if (!lastData)
      loading.value = true

    loadingMore.value = true
    const currentData = await service(lastData)
    if (!lastData) {
      finalData.value = {
        ...currentData,
        records: [...(currentData.records ?? [])],
      }
      loading.value = false
    }
    else {
      finalData.value = {
        ...currentData,
        records: [...(lastData.records ?? []), ...currentData.records],
      }
    }
    loadingMore.value = false
  }

  const run = (lastData?: TData) => {
    try {
      runAsync(lastData)
    }
    catch (err) {

    }
  }

  const loadMore = () => {
    if (noMore.value)
      return
    loadingMore.value = true
    finalData.value!.page++
    run(finalData.value)
  }

  const loadMoreAsync = async () => {
    if (noMore.value)
      return false
    loadingMore.value = true
    finalData.value!.page++
    return runAsync(finalData.value)
  }

  const reload = () => {
    loadingMore.value = false
    return run()
  }

  const reloadAsync = () => {
    loadingMore.value = false
    return runAsync()
  }

  const loadStatus = computed(() => {
    if (loading.value || loadingMore.value)
      return 'loading'
    if (noMore.value)
      return 'nomore'
    return 'loadmore'
  })

  onReachBottom(() => {
    loadMore()
  })

  onMounted(() => {
    run()
  })

  return {
    data: finalData,
    loading,
    loadingMore,
    noMore,
    loadStatus,
    loadMore,
    loadMoreAsync,
    reload,
    reloadAsync,
    mutate: (newData: TData) => { finalData.value = newData },
  }
};
