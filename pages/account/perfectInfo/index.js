
// pages/account/perfectInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountInfo: {
      phone: '18812345678',
      email: 'test@vip.com',
      steamAcc: '未绑定',
      steamUrl: '未绑定',
      alipay: '未绑定'
    },

    perfectInfoStatus: '领取后',
    perfectInfoStatusWords: '点击获取奖励',

    accessories: [
      "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170617/X0005LZS.png",
      "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BYY.png",
      "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170617/X0005LZS.png",
      "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170617/X0005LZS.png",
      "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BYY.png"
    ]
  },
  /* 数据接口对应是视图层说明:

  **  perfectInfoStatus: 
     资料认证页面 4种状态：
      1. 未完善，             ---------------- 饰品层模糊隐藏
      2. 已完善(待领取奖励)，  ---------------- 显示 [点击获取奖励] 按钮
      3.领取成功(显示领取的饰品), --------------  [点击获取奖励] 按钮 消失,提示 获得以下饰品， 饰品层显示
      4.领奖后(领取成功后,页面重载的状态) -------  隐藏 Banner, 饰品层 仅显示 各项绑定信息
  **
  **
  */

  // 跳转到 [手机绑定] 页面
  jumpToSetPhone: function(){
    wx.navigateTo({
      url: '../setPhone/index',
    })
  },

  // 跳转到 [邮箱绑定] 页面
  jumpToSetEmail: function () {
    wx.navigateTo({
      url: '../setEmail/index',
    })
  },

  
  /**
   * 
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
    
    // 每次页面渲染 根据 perfectInfoStatus 不同的状态值 动态更改 perfectInfoStatusWords 状态提示语
    switch (this.data.perfectInfoStatus){
      case "未完善":
        this.setData({
          perfectInfoStatusWords: '完善资料即获取5件随机饰品'
        });
        break;

      case "已完善":
        this.setData({
          perfectInfoStatusWords: '点击获取奖励'
        });
        break;

      case "领取成功":
        this.setData({
          perfectInfoStatusWords: '恭喜你获得以下饰品'
        });
        break;

      case "领取成功":
        this.setData({
          perfectInfoStatusWords: '恭喜你获得以下饰品'
        });
        break;

      case "领取后":
        this.setData({
          perfectInfoStatusWords: ''
        })
        break;
    }
  },


  // 页面后退
  goBack: function () {
    wx.navigateBack({
      url: ''
    })
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