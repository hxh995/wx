// pages/records/records.js
const app = getApp()
wx.cloud.init();
const db = wx.cloud.database({
  env:'records-jbc88'
})
db.collection("counters").get({
  success(res){
    app.globalData.ne.push(res.data)
    console.log(app.globalData.ne)
  },
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ne:app.globalData.ne

  },
  handleClicks:function(e){
    console.log(e.target.id);

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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