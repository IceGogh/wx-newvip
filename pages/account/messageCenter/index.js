// pages/account/messageCenter/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailWords: '',
    msgData: [
      {
        "bg": "https://match.steampp.com/mobile/static/wx/account/message1.png",
        "title": "账户",
        "time": "09:35",
        "msg": "您的账户于 2017-08-03 09：35 在黑龙江省哈尔滨市登录12312312312312312312313123123123123"
      },
      {
        "bg": "https://match.steampp.com/mobile/static/wx/account/message2.png",
        "title": "竞猜",
        "time": "19:25",
        "msg": "您参与的'IG-LDG 第二局 十杀'已经流局12312312312312312311231312312"
      },
      {
        "bg": "https://match.steampp.com/mobile/static/wx/account/message3.png",
        "title": "ROLL",
        "time": "一天前",
        "msg": "您的账户于 2017-08-03 09：35 在黑龙江省哈尔滨市登录12312312312312312312313123123123123"
      },
      {
        "bg": "https://match.steampp.com/mobile/static/wx/account/message4.png",
        "title": "VIP特权",
        "time": "三个月前",
        "msg": "您的账户于 2017-08-03 09：35 在黑龙江省哈尔滨市登录12312312312312312312313123123123123"
      }
    ]
  },


  // 跳转到 [消息详情] -  账号消息
  jumpToMsgDetail: function(e){
    // 点击不同 [账户消息]、[竞猜消息]、[ROLL消息]、[VIP特权] 传参
    let Ind = e.currentTarget.dataset.detailind;
    wx.navigateTo({
      url: '../msgDetail/index?ind=' + Ind,
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
    console.log(options)
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