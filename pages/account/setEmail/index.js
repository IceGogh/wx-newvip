// pages/account/setEmail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountInfo: {
      email: 'test@vip.com'
    },

    keyInVerify: false,
    gettingCodeStatus: false,
    getCode: "获取验证码"
  },

  // 邮箱有效验证
  keyin: function (e) {
    var val = e.detail.value
    if (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(val)) {
      this.setData({
        keyInVerify: true,
        getCode: "获取验证码"
      })
    } else {
      this.setData({
        keyInVerify: false,
        getCode: "无效邮箱地址"
      })
    }
  },

  // 获取 验证码
  getCode: function () {
    let t = this
      , Sec = 60;
    if (!t.data.gettingCodeStatus && t.data.keyInVerify) {
      this.setData({
        gettingCodeStatus: true,
        getCode: Sec
      })
      var Timer = setInterval(function () {
        if (Sec >= 1) {
          Sec--;
          t.setData({
            getCode: Sec
          })
        } else {
          clearInterval(Timer);
          t.setData({
            gettingCodeStatus: false,
            getCode: "获取验证码"
          })
        }
      }, 1000)
    }
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