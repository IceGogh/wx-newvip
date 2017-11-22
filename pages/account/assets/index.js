// pages/account/assets/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    currentTab: 0,
    swiperHeight: 0,
    slidePortStatus: true,
    orderByValue: false,
    channelSel: 0,
    getOrPay: 0,
    gold: [
      {
        "title": "竞猜：IG-LGD",
        "time": "2017-04-13 13:56",
        "resulte": -500
      },
      {
        "title": "娱乐：掷骰子",
        "time": "2017-05-23 13:56",
        "resulte": -566
      },
      {
        "title": "娱乐：掷骰子",
        "time": "2017-05-23 13:56",
        "resulte": -566
      },
      {
        "title": "娱乐：掷骰子",
        "time": "2017-05-23 13:56",
        "resulte": -566
      },
      {
        "title": "充值返回：赏金充值",
        "time": "2017-04-13 13:56",
        "resulte": 10
      },
      {
        "title": "竞猜：IG-LGD",
        "time": "2017-04-13 13:56",
        "resulte": -500
      },
      {
        "title": "竞猜：IG-LGD",
        "time": "2017-04-13 13:56",
        "resulte": -500
      },
      {
        "title": "竞猜：IG-LGD",
        "time": "2017-04-13 13:56",
        "resulte": -500
      },
      {
        "title": "竞猜：IG-LGD",
        "time": "2017-04-13 13:56",
        "resulte": -500
      }
    ],

    silver: [
      {
        "title": "签到赠送：4.14签到",
        "time": "2017-04-14 08:56",
        "resulte": 33,
      },
      {
        "title": "签到赠送：4.13签到",
        "time": "2017-04-14 08:56",
        "resulte": 21,
      },
      {
        "title": "兑换赏金：碎银兑换12赏金",
        "time": "2017-04-14 08:56",
        "resulte": -1200,
      }
    ],

    assets: [
      {
        "title": "支付宝：订单号：123456444444",
        "time": "2017-04-14 08:56",
        "resulte": "20",
      },
      {
        "title": "微信支付：订单号：123456444444",
        "time": "2017-04-13 18:56",
        "resulte": "200",
      },
      {
        "title": "支付宝：订单号：123456444444",
        "time": "2017-04-14 08:56",
        "resulte": "20",
      },
      {
        "title": "支付宝：订单号：123456444444",
        "time": "2017-04-14 08:56",
        "resulte": "20",
      }
    ],

    channel: [
      {
        "title1": "赏金渠道",
        "item1": [
          "不限",
          "竞猜",
          "娱乐",
          "充值返回",
          "商城兑换",
          "推广活动"
        ],
        "title2": "收支类型",
        "item2" : [
          "不限",
          "收入",
          "支出"
        ]
      },

      {
        "title1": "碎银渠道",
        "item1": [
          "不限",
          "签到赠送",
          "兑换赏金"
        ],
        "title2": "收支类型",
        "item2": [
          "不限",
          "收入",
          "支出"
        ]
      },

      {
        "title1": "充值渠道",
        "item1": [
          "不限",
          "支付宝",
          "财付通",
          "微信支付",
          "银行卡",
          "其他"
        ]
      },
    ]
  },


  // 不同页面渲染 动态计算 swiper 高度 并行内赋值
  getSwiperH: function(){
    let Length,   t = this ;
    switch (t.data.currentTab){
      case 0:
        Length = t.data.gold.length;
        break;
      case 1:
        Length = t.data.silver.length;
        break;
      case 2:
        Length = t.data.assets.length;
        break;
    }
    t.setData({
      swiperHeight: 140 * Length + 'rpx'
    })
  },

  //  orderByVal 根据 [价值] 排序
  orderByVal: function(){
    this.setData({
      orderByValue: !this.data.orderByValue
    })
    this.orderRule();
  },


  // [价值] 排序函数
  orderRule: function(){
    const t = this;
    function by(resulte){
      return function(a, b){
        const val1 = a['resulte'];
        const val2 = b['resulte'];

        //  正反阀值 对应 正序 逆序
        if (t.data.orderByValue ){
          return val2 - val1;
        }else{
          return val1 - val2;
        }
      }
    }

    // 根据不同类型记录 分别双向绑定 赋值/重新排序数据
    switch (t.data.currentTab){
      case 0:
        var newArr = this.data.gold.sort(by("resulte"));
        t.setData({
          gold: newArr
        })
        break;
      
      case 1:
        var newArr = this.data.silver.sort(by("resulte"));
        t.setData({
          silver: newArr
        })
        break;
      
      case 2:
        var newArr = this.data.assets.sort(by("resulte"));
        t.setData({
          assets: newArr
        })
        break;
    }
  },

  // 左右滑动 swiperChange
  swiperChange: function(e){
    let Page = e.detail.current;
    this.setData({
      currentTab: Page
    })
    this.getSwiperH();
  },


  // 选择 [赏金记录] [碎银记录] [充值记录]
  selectGold: function(){
    this.setData({
      currentTab: 0
    })
  },

  selectSilver: function () {
    this.setData({
      currentTab: 1
    })
  },

  selectAssets: function () {
    this.setData({
      currentTab: 2
    })
  },

  // slidePort 打开 筛选 侧边栏
  slidePort: function(){
    this.setData({
      slidePortStatus: false
    })

  },

  // 完成 选择条件 关闭 筛选 侧边栏
  confirm: function(){
    this.setData({
      slidePortStatus: true
    })
  },

  // ChooseChannelSel 筛选 -> 选择不同渠道
  ChooseChannelSel: function(e){
    let selectVal = e.currentTarget.dataset.ind;
    this.setData({
      channelSel: selectVal
    })
  }, 

  // ChooseGetOrPay 筛选 -> 选择收支类型
  ChooseGetOrPay: function (e) {
    let selectVal = e.currentTarget.dataset.ind;
    this.setData({
      getOrPay: selectVal
    })
  }, 

  // resetChoose 重置 筛选条件
  resetChoose: function(){
    this.setData({
      channelSel: 0,
      getOrPay: 0
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
    this.getSwiperH();
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