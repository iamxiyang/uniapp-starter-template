export function timer(t: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(t)
    }, t)
  })
}

export interface Deferred<T> {
  resolve: (value: T | PromiseLike<T>) => void
  reject: (reason: unknown) => void
  promise: Promise<T>
}

export function defer<T = void>(): Deferred<T> {
  let resolve!: (value: T | PromiseLike<T>) => void
  let reject!: (reason: unknown) => void
  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })
  return { resolve, reject, promise }
}

export function toastNotOpen() {
  uni.showToast({
    title: '功能暂未开放',
    icon: 'none',
    duration: 2000,
  })
}

export function toast(title: string) {
  uni.showToast({
    title,
    icon: 'none',
    duration: 2000,
  })
}
