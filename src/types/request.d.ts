export interface PageData<T = any> {
  page: number
  size: number
  total: number
  records: T[]
}
