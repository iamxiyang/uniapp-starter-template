import { toast } from './helper'

export function checkWechatMiniUpdate() {
  const updateManager = uni.getUpdateManager()
  updateManager.onCheckForUpdate((_res) => {
    // 请求完新版本信息的回调
    // console.log(res.hasUpdate)
  })
  updateManager.onUpdateReady((_res) => {
    uni.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success(res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate()
        }
      },
    })
  })

  updateManager.onUpdateFailed((_res) => {
    // 新的版本下载失败
  })
}

export async function checkScopeAuth(scope: keyof UniApp.AuthSetting | string): Promise<boolean> {
  try {
    const settings = await uni.getSetting()
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    if (settings.authSetting[scope])
      return true
    const auth = await uni.authorize({
      scope,
    })
    if (auth)
      return true
    toast('请配置权限')
    return await uni.openSetting()
  }
  catch (error) {
    console.error('Error checking permission:', error)
  }
  return false
}
