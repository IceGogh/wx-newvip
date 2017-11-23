// pages/account/questionIndex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ques: [
      {
        "bgUrl": "https://match.steampp.com/mobile/static/wx/account/question1.png",
        "title": "游戏饰品",
        "PageUrl": "../goldRule/index"
      },
      {
        "bgUrl": "https://match.steampp.com/mobile/static/wx/account/question2.png",
        "title": "赏金制度"
      },
      {
        "bgUrl": "https://match.steampp.com/mobile/static/wx/account/question3.png",
        "title": "等级提升"
      },
      {
        "bgUrl": "https://match.steampp.com/mobile/static/wx/account/question4.png",
        "title": "赔付机制"
      },
      {
        "bgUrl": "https://match.steampp.com/mobile/static/wx/account/question5.png",
        "title": "推广有奖"
      },
      {
        "bgUrl": "https://match.steampp.com/mobile/static/wx/account/question6.png",
        "title": "竞猜需知"
      },
      {
        "bgUrl": "https://match.steampp.com/mobile/static/wx/account/question7.png",
        "title": "VIPGame"
      },
      {
        "bgUrl": "https://match.steampp.com/mobile/static/wx/account/question8.png",
        "title": "常见问题"
      }
    ]
  },

  // 页面跳转
  jumpToPageUrl0: function(){
    wx.navigateTo({
      url: '游戏饰品分页',
    })
  },

  jumpToPageUrl1: function () {
    wx.navigateTo({
      url: '../goldRule/index',
    })
  },

  jumpToPageUrl2: function () {
    wx.navigateTo({
      url: '等级提升',
    })
  },

  jumpToPageUrl3: function () {
    wx.navigateTo({
      url: '等级提升',
    })
  },

  jumpToPageUrl4: function () {
    wx.navigateTo({
      url: '等级提升',
    })
  },

  jumpToPageUrl5: function () {
    wx.navigateTo({
      url: '等级提升',
    })
  },

  jumpToPageUrl6: function () {
    wx.navigateTo({
      url: '等级提升',
    })
  },

  jumpToPageUrl7: function () {
    wx.navigateTo({
      url: '等级提升',
    })
  },
  
  jumpToPageUrl8: function () {
    wx.navigateTo({
      url: '等级提升',
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