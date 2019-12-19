// pages/yonghu/yonghu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str_u_login:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
  wx.getStorageInfo({
    success: function(res) {
      console.log(res.keys)
      console.log(res.currentSize)
      console.log(res.limitSize)
    },
  })
    wx.getStorage({
      key: 'u_login',
      success: function(res) {
        console.log(res.data)
        that.setData({
          str_u_login:res.data
        })
        console.log(that.data.str_u_login)
        if(that.data.str_u_login=='yes')
       { 
         
         
          wx.redirectTo({
          url: '/pages/user/user',
        })}
        else{
          wx.redirectTo({
            url: '/pages/vip/vip',
          })
        }
       

      },
      fail:function(e)
      {
        console.log(e)
        
        
        wx.redirectTo({
          url: '/pages/vip/vip',
        })
      }
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