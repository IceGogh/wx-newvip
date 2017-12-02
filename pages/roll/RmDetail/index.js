// pages/roll/RmDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    changeRoomInfo: false
  },

  // 打开 [修改房间信息] openChangeRoomInfo
  openChangeRoomInfo: function() {
    this.setData({
      changeRoomInfo: true
    })
  },
  
  // 关闭 [修改房间信息] closeChangeRoomInfo
  closeChangeRoomInfo: function() {
    this.setData({
      changeRoomInfo: false
    })
  },

  // goBack 返回
  goBack: function () {
    wx.navigateBack({
      url: ''
    })
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