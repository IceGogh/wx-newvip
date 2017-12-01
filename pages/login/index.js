var globalInfo = getApp();

// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: '',
    password: ''
  },

  // jumpToForgotPw 跳转到 [忘记密码] 页面
  jumpToForgotPw: function(){
    wx.navigateTo({
      url: 'forgotPw/index',
    })
  },

  // jumpToRegist 跳转到 [去注册] 页面
  jumpToRegist: function () {
    wx.navigateTo({
      url: 'regist/index',
    })
  },

  //  keyInUid
  keyInUid: function (e) {
    let Val = e.detail.value;
    this.setData({
      uid: Val
    })
  },

  //  keyInPw
  keyInPw: function (e) {
    let Val = e.detail.value;
    this.setData({
      password: Val
    })
  },

  // login 登录
  login: function(){
    let t = this;
    wx.request({
      url: "https://account.steampp.com/m/login/login",
      data: {
        "account": t.data.uid,
        "passwd": t.data.password
      },
      header: {
        'content-type': 'application/json' 
      },
      fail: function(e){
        console.log('连接后台失败.')
      },
      success: function(e){
        t.loginCallBk(e)
      }
    })
  },

  //  登录后回调
  loginCallBk: function(e){
    let result = e.data[0].status
      , UserKey = e.data[0].content;
    if (result === 'err'){
      console.log('eeeeeee')
    } else if (result === 'ok'){
      console.log(UserKey)
    }
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