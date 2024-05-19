import Request, { type HttpData, type HttpDownloadTask, type HttpRequestConfig, type HttpRequestTask, type HttpResponse, type HttpTask, type HttpUploadTask } from 'luch-request'

const http = new Request({
  timeout: 1000000,
})

const API_URL = ''

// 在请求之前拦截
http.interceptors.request.use(
  async (config) => {
    config.baseURL = API_URL
    return config
  },
  (config) => {
    return Promise.reject(config)
  },
)

// 在请求之后拦截
async function HttpResponseInterceptor(response: HttpResponse) {
  return response.data
}
async function HttpResponseFailInterceptor(response: HttpResponse) {
  return Promise.reject(response?.data || response)
}
http.interceptors.response.use(
  async (response) => {
    if (response.data.code > 400)
      return HttpResponseFailInterceptor(response)

    // success
    return HttpResponseInterceptor(response)
  },
  async (response: any) => {
    // fail
    return HttpResponseFailInterceptor(response)
  },
)

// 由于拦截器对返回值进行了处理，没有很好的推断出来，这里修改一下
// 之前：<T = any, R = HttpUploadResponse<T>, D = HttpUploadTask>(url: string, config?: HttpRequestConfig<D>): Promise<R>;
// 现在：<T = any, D = HttpUploadTask>(url: string, config?: HttpRequestConfig<D>): Promise<T>;
interface HttpResponseInterceptorInterface {
  request: <T = any, D = HttpRequestTask>(config: HttpRequestConfig<D>) => Promise<T>
  get: <T = any, D = HttpRequestTask>(url: string, config?: HttpRequestConfig<D>) => Promise<T>
  delete: <T = any, D = HttpRequestTask>(url: string, data?: HttpData, config?: HttpRequestConfig<D>) => Promise<T>
  head: <T = any, D = HttpRequestTask>(url: string, data?: HttpData, config?: HttpRequestConfig<D>) => Promise<T>
  options: <T = any, D = HttpRequestTask>(url: string, data?: HttpData, config?: HttpRequestConfig<D>) => Promise<T>
  post: <T = any, D = HttpRequestTask>(url: string, data?: HttpData, config?: HttpRequestConfig<D>) => Promise<T>
  put: <T = any, D = HttpRequestTask>(url: string, data?: HttpData, config?: HttpRequestConfig<D>) => Promise<T>
  connect: <T = any, D = HttpRequestTask>(url: string, data?: HttpData, config?: HttpRequestConfig<D>) => Promise<T>
  trace: <T = any, D = HttpRequestTask>(url: string, data?: HttpData, config?: HttpRequestConfig<D>) => Promise<T>
  upload: <T = any, D = HttpUploadTask>(url: string, config?: HttpRequestConfig<D>) => Promise<T>
  download: <T = any, D = HttpDownloadTask>(url: string, config?: HttpRequestConfig<D>) => Promise<T>
  middleware: <T = any, D = HttpTask>(config: HttpRequestConfig<D>) => Promise<T>
}

export default http as HttpResponseInterceptorInterface
