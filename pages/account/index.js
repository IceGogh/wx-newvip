

// pages/account/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signCheck: false,
    signIn: false,
    getSilver: 33,
    date: new Date().getDate(),
    accountInfo: {
      photo: 'https://match.steampp.com/mobile/static/wx/account/accountPhoto.png',
      name : '黑土heyt111111111111111',
      level: '掘金游民',
      levelBg: 'https://match.steampp.com/mobile/static/wx/account/accountLevel.png',
      silver: 55512,
      VIPprops: 666,
      gold: 777
    }
  },

  // 签到 tapSign 
  tapSign: function(){
    if(!this.data.signCheck){
      this.setData({
        signIn: true,
        signCheck: true
      })
    }
  },

  // 关闭签到成功弹框 (朕知道了)
  signed: function(){
    this.setData({
      signIn: false
    })
  },
  
  // 跳转到 个人设置
  jumpToSetting: function(){
    wx.navigateTo({
      url: 'accountSetting/index'
    })
  },

  // 跳转到 [资产摘要]
  jumpToAssets: function () {
    wx.navigateTo({
      url: 'assets/index'
    })
  },
  
  // 跳转到 [常见问题]
  jumpToQues: function () {
    wx.navigateTo({
      url: 'questionIndex/index'
    })
  },

  // 跳转到 [消息中心]
  jumpToMessageCenter: function () {
    wx.navigateTo({
      url: 'messageCenter/index?text=123'
    })
  },

  // 跳转到 [消息中心]
  jumpToRecharge: function() {
    wx.navigateTo({
      url: 'reCharge/index'
    })
  },

  // 跳转到 [我的推荐]
  jumpToMyRecommend: function () {
    wx.navigateTo({
      url: 'myRecommend/index'
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