// pages/account/changeName/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldPw: '',
    newPw: '',
    newPw2: '',
    eyesCheck1: false,
    eyesCheck2: false,
    eyesCheck3: false
  },

  // 验证密码长度1
  psCheck1: function(e){
    let val = e.detail.value;
    this.setData({
      oldPw: val
    })
    if(this.data.oldPw.split('').length >= 8){
      this.setData({
        eyesCheck1: true
      })
    }else{
      this.setData({
        eyesCheck1: false
      })
    }
  },

  // 验证密码长度2
  psCheck2: function (e) {
    let val = e.detail.value;
    this.setData({
      newPw: val
    })
    if (this.data.newPw.split('').length >= 8) {
      this.setData({
        eyesCheck2: true
      })
    } else {
      this.setData({
        eyesCheck2: false
      })
    }
  },

  // 验证密码长度3
  psCheck3: function (e) {
    let val = e.detail.value;
    this.setData({
      newPw2: val
    })
    if (this.data.newPw2 === this.data.newPw) {
      this.setData({
        eyesCheck3: true
      })
    } else {
      this.setData({
        eyesCheck3: false
      })
    }
  },
  psCheckNum: function(e){

  },


  // 保存修改
  saveChange: function () {
    // 调后台 ajax 接口 传数据
    // 返回 ok 后 后退页面到 [个人设置]
    this.goBack();
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