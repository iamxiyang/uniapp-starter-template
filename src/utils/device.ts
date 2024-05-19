let account: UniApp.AccountInfo
let appBase: UniApp.GetAppBaseInfoResult
let window: UniApp.GetWindowInfoResult
let device: UniApp.GetDeviceInfoResult

export function getDeviceInfo() {
  if (!account)
    account = uni.getAccountInfoSync()
  if (!appBase)
    appBase = uni.getAppBaseInfo()

  if (!window)
    window = uni.getWindowInfo()

  if (!device)
    device = uni.getDeviceInfo()

  return {
    account,
    appBase,
    window,
    device,
    // 小程序版本
    envVersion: account.miniProgram.envVersion,
    // 运行环境
    platform: device?.platform,
    isPcOrMac: device?.platform === 'mac' || device?.platform === 'windows',
  }
}
