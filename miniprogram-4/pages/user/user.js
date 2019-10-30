const app = getApp()

Page({
  data: {
    isLogin: false,
    userInfo: "",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),


  },
  onLoad() {
    // 查看是否授权
    let that = this;
    wx.getSetting({
      success(res) {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          that.data.isLogin = false;
          that.setData({
            isLogin: false
          });
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
              that.setData({
                userInfo: res.userInfo
              });
            }
          })
        } else {
          that.setData({
            isLogin: false
          });
        }
      }
    })
  },
  onShow() {

  },
  bindGetUserInfo(e) {
    // 授权后的处理
    console.log(e.detail.userInfo)
    this.setData({
      isLogin: true
    });
  }
})