// pages/account/accountMsg/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailInd: '',
    msg: {
      0: {
        "header": "消息中心",
        "msgData": [
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 2017-04-14 09：33在",
            "msgKey": "广东省广州市",
            "msgPost": "异地登录"
          },
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 2017-04-14 09：33在",
            "msgKey": "广东省广州市",
            "msgPost": "异地登录"
          },
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 2017-04-14 09：33在",
            "msgKey": "广东省广州市",
            "msgPost": "异地登录"
          },
        ]
      },

      1: {
        "header": "竞猜消息",
        "msgData": [
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 竞猜消息数据",
            "msgKey": "竞猜消息数据",
            "msgPost": "异地登录"
          },
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 2017-04-14 09：33在",
            "msgKey": "竞猜消息数据",
            "msgPost": "异地登录"
          },
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 2017-04-14 09：33在",
            "msgKey": "竞猜消息数据",
            "msgPost": "异地登录"
          },
        ]
      },

      2: {
        "header": "ROLL消息",
        "msgData": [
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于ROLL 消息数据 3在",
            "msgKey": "ROLL 消息数据",
            "msgPost": "异地登录"
          },
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 2017-04-14 09：33在",
            "msgKey": "ROLL 消息数据",
            "msgPost": "异地登录"
          },
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 2017-04-14 09：33在",
            "msgKey": "ROLL 消息数据",
            "msgPost": "异地登录"
          },
        ]
      },

      3: {
        "header": "VIP特权消息",
        "msgData": [
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 VIP特权消息数据 ---在",
            "msgKey": "VIP特权消息数据",
            "msgPost": "异地登录"
          },
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 2017-04-14 09：33在",
            "msgKey": "VIP特权消息数据",
            "msgPost": "异地登录"
          },
          {
            "time": "2017-04-14 09:33",
            "msg": "您的账号于 2017-04-14 09：33在",
            "msgKey": "VIP特权消息数据",
            "msgPost": "异地登录"
          },
        ]
      }
      
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
  onLoad: function (op) {
    // 接收 messageCenter 页面跳转 url 传参 并赋值
    this.setData({
      detailInd: op.ind
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