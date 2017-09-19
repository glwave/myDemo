Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("--index page onLoad--");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("--index page onReady--");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("--index page onShow--");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("--index page onHide--");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("--index page onUnload--");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("--index page onPullDownRefresh--");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("--index page onReachBottom--");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("--index page onShareAppMessage--");
  },

  itemClick : function(){
    wx.navigateTo({
      url: '../logs/logs?id=1',
    })
  },

  itemClick1: function () {
    wx.redirectTo({
      url: '../logs/logs?id=2',
    })
  }
})