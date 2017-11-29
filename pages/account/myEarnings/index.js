// pages/account/myEarnings/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    earnings: {
      "silver": 5422222332322313,
      "props": 2432312321312312,
      "gold": 231
    },
    hov: 0,
    rateWeekStatus: false,
    rateTotalStatus: false,
    weekRotate: '',
    weekRotateR: '',
    totalRotate: '',
    totalRotateR: '',
    rateData: {
      "week": {
        "rate": 67,
        "times": 26,
        "goldEarnings": 20000,
        "propsEarnings": 20001,
        "winTime": 6,
        "winBonus": 58,
        "rebate": 666
      },
      "total": {
        "rate": 24,
        "times": 226,
        "goldEarnings": -20000,
        "propsEarnings": -1001,
        "winTime": 16,
        "winBonus": 518,
        "rebate": 6
      },
    }
  },

  // selHov 周
  selHov: function(){
    this.setData({
      hov:　0
    })
  },

  // selHov2 总
  selHov2: function () {
    this.setData({
      hov: 　1
    })
  },

  // swiperHov 
  swiperHov: function(e){
    let Val = e.detail.current;
    this.setData({
      hov: Val
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
    let RateW = this.data.rateData.week.rate
    ,   RateT = this.data.rateData.total.rate;
    if (RateW > 100){
      RateW = 100
    }
    // 根据 rate 百分率 设置 status 0， 1 情形
    // 运动熟读 匀速  时间根据传入百分比换算  50% 时 1000ms  即 1% => 20ms
    if (RateW <= 50 && RateW >= 0) {

      var Deg = RateW * 3.6;
      var rateL = wx.createAnimation({
        duration: RateW * 20,
        transformOrigin: "100% 50% 0",
        timingFunction: "linear"
      }).rotate(Deg).step();

      this.setData({
        rateWeekStatus: false,
        weekRotate: rateL.export()
      })



    } else {
      var Deg = (RateW - 50) * 3.6;
      
      var rateL = wx.createAnimation({
        duration: 1000,
        transformOrigin: "100% 50% 0",
        timingFunction: 'linear'
      }).rotate(180).step();

      this.setData({
        weekRotate: rateL.export()
      })
      var t = this;
      setTimeout(function(){
        var rateR = wx.createAnimation({
          duration: (RateW - 50) * 20,
          transformOrigin: "0 50% 0",
          timingFunction: 'linear'
        }).rotate(Deg).step();

        t.setData({
          rateWeekStatus: true,
          weekRotateR: rateR.export()
        })
      },1000)
    }


    // 总竞猜胜率
    if (RateT > 100) {
      RateT = 100
    }
    if (RateT <= 50 && RateT >= 0) {

      var Deg2 = RateT * 3.6;
      var rateL2 = wx.createAnimation({
        duration: RateT * 20,
        transformOrigin: "100% 50% 0",
        timingFunction: "linear"
      }).rotate(Deg2).step();

      this.setData({
        rateTotalStatus: false,
        totalRotate: rateL2.export()
      })



    } else {
      var Deg2 = (RateW - 50) * 3.6;

      var rateL2 = wx.createAnimation({
        duration: 1000,
        transformOrigin: "100% 50% 0",
        timingFunction: 'linear'
      }).rotate(180).step();

      this.setData({
        totalRotate: rateL2.export()
      })
      var t = this;
      setTimeout(function () {
        var rateR2 = wx.createAnimation({
          duration: (RateT - 50) * 20,
          transformOrigin: "0 50% 0",
          timingFunction: 'linear'
        }).rotate(Deg2).step();

        t.setData({
          rateTotalStatus: true,
          totalRotateR: rateR2.export()
        })
      }, 1000)
    }

  },

  rateL: function(rate){
   
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