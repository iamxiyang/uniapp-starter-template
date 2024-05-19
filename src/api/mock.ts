import { uuid } from '@/tmui/components/tm-render/tmCv/util'
import { timer } from '@/utils/helper'

export async function page(data: any) {
  // TODO mock
  await timer(1000)
  return {
    page: data?.page || 1,
    size: 10,
    total: 20,
    records: Array.from({ length: 10 }, (_, i) => {
      return {
        id: uuid(10, 10),
        name: `name-${i + 1}`,
      }
    }),
  }
}
