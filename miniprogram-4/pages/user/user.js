const app = getApp()

Page({
  data: {
    isLogin: false,
    userInfo: "",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),


  },
  onLoad() {
    // 查看是否授权
    
   
   

  },
  onShow() {
    let that = this;
    wx.getStorage({
      key: 'wx_login',
      success: function(res) {
       that.setData({
         isLogin:"true"
       })
      },
    })

  },
  bindGetUserInfo(e) {
    // 授权后的处理
    console.log(e.detail.userInfo)
    this.setData({
      isLogin: true
    });
  }
})