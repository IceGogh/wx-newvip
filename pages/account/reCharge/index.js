// pages/account/reCharge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coinNumber: 51645,
    step: 1,
    reNumber: 50,
    reNumberList: [
      50, 100, 500, 1000, 2000, 5000
    ]
  },

  // toStep2 赏金充值
  toStep2: function(){
    this.setData({
      step: 2
    })
  },

  // 清空充值金额 clearNumber
  clearNumber: function(){
    this.setData({
      reNumber: 0
    })
  },

  // 选择充值金额
  selectNum: function(e){
    let Val = e.currentTarget.dataset.nub;
    this.setData({
      reNumber: Val
    })
  },

  // 页面后退
  goBack: function () {
    let Step = this.data.step;
    if( Step === 1 ){
      wx.navigateBack({
        url: ''
      })
    }else{
      this.setData({
        step: 1
      })
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