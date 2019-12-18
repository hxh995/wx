// pages/vip/vip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str_u_login:"",
    str_u_id:"",
    str_u_name:"",
    str_wx_login:""

  },
  forsubmit:function(e){
    console.log(e.detail.value)
    wx.showLoading({
      title: '登录中...',
    })
    wx.request({

    })
  },
  
 getWxInfo:function()
 {
   wx.getUserInfo({
     success:function(res){
       console.log(res.userInfo)
     }
   })
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  zhuce:function()
  {
    wx.navigateTo({
      url: '/pages/huiyuan/zhanghao/reg',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.setStorage({
      key: 'wx_login',
      data: 'no',
      })
    wx.getStorage({
      key: 'u_login',
      success: function (res) {
        console.log("onShow success")
        that.setData({
          str_u_login: res.data
        })
      },
      fail:function(res)
      {
        console.log(res.data+"   onShow for test success but call back fail")
      }
    })
    wx.getStorage({
      key: 'u_id',
      success: function (res) {
        that.setData({
          str_u_id: res.data
        })
      },
    })
    wx.getStorage({
      key: 'u_name',
      success: function (res) {
        that.setData({
          str_u_name: res.data
        })
      },
    })
    if(this.data.str_u_login=='yes')
    {

    }
  },
  //授权之后的处理函数
  getWxInfo:function(e){
    console.log(e.detail.userInfo)
    wx.setStorage({
      key: 'wx_login',
      data: 'yes',
    })
    this.setData({
      str_wx_login:"yes"
    })
    wx.navigateTo({
      url: '/pages/user/user',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})