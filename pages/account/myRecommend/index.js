// pages/account/myRecommend/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareFlag: false,
    recommendData: [
      {
        "time": "2017-08-23",
        "account": "HEYTOOO",
        "total1": "≥$1000",
        "total2": "(5000赏金)",
        "bonus": 18
      },
      {
        "time": "2017-08-23",
        "account": "黑土呀",
        "total1": "≥$30000",
        "total2": "(150000赏金)",
        "bonus": 388
      },
      {
        "time": "2017-08-23",
        "account": "苏苏苏123123123123",
        "total1": "≥$1000",
        "total2": "(5000赏金)",
        "bonus": "无"
      },
      {
        "time": "2017-08-23",
        "account": "HEYTOOO",
        "total1": "≥$1000",
        "total2": "(5000赏金)",
        "bonus": 58
      }
    ]
  },

  //  sharing 分享
  sharing: function(){
    this.setData({
      share: true
    })
  },

  // closeShare 关闭分享层
  closeShare: function () {
    this.setData({
      share: false
    })
  },

  // 页面后退
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