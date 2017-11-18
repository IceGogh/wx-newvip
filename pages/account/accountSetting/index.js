// pages/account/accountSetting/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountInfo: {
      photo: 'https://match.steampp.com/mobile/static/wx/account/accountPhoto.png',
      name: '黑土',
      signature: '个性签'
    },
    newPhoto: '',
    choosePhoto: true
  },

  // 拍照/选择照片
  camera: function(){
    const t = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const url = res.tempFilePaths;
        t.setData({
          newPhoto: url,
          choosePhoto: false
        })
      }
    })
  },

  // 取消选择照片
  cancleCamera: function(){
    this.setData({
      newPhoto: '',
      choosePhoto: true
    })
  },

  // 选定图片
  confirmCamera: function(){
    var photo = this.data.accountInfo.photo;
    this.setData({
      photo: this.data.newPhoto,
      choosePhoto: true
    })
   
    //  执行回调 传给后台
    // 

  },

  // 跳转到 [修改昵称] 页面
  jumpToChangeName: function(){
    wx.navigateTo({
      url: '../changeName/index'
    })
  },

  // 跳转到 [修改签名] 页面
  jumpToChangeSignature: function () {
    wx.navigateTo({
      url: '../changeSignature/index'
    })
  },

  // 跳转到 [修改密码] 页面
  jumpToChangePassword: function () {
    wx.navigateTo({
      url: '../changePassword/index'
    })
  },

  // 页面后退
  goBack: function(){
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