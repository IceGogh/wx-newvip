// pages/account/changeName/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '黑土heyt',
    leng: 1,
    autoFocus: true
  },

  // 统计昵称长度
  getLeng: function(){
    this.setData({
      leng: this.data.name.split('').length
    })
  },

  // 更改昵称
  keyName: function(e){
    // 长度小于8限制
    if(this.data.leng <= 8){
      let val = e.detail.value;
      this.setData({
        name: val
      })
      this.getLeng();
    }
  },

  // 清空昵称框
  clearName: function(){
    this.setData({
      name: '',
      leng: 0,
      autoFocus: true
    })
  },

  // 保存修改昵称
  saveName: function(){
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
    //  页面加载时 获取昵称长度
    this.getLeng();
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