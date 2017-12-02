// pages/roll/createRm/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepStatus: 0,
    selH: 0,
    appid: "570_2",
    slidePortStatus: true,
    orderByValue: false,
    slidePortStatus: true,
    selectProps: [],

    props: [
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      },
      {
        "img": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057R3.png",
        "val": 380.00
      }
    ],
    
    selectIt: {
      "0": {
        "title": "稀有度",
        "kind": [
          "不限", "普通", "罕见", "稀有", "神话", "不朽", "传说", "至宝"
        ]
      },
      "1": {
        "title": "类型",
        "kind": [
          "不限", "手枪", "重型武器", "微信冲锋枪", "步枪", "匕首", "手套", "其他"
        ]
      }
    },
    selectKind: {
      "0": 0,
      "1": 0
    }
  },

  // 选择 [DOTA2]
  chooseSelH0: function () {
    this.setData({
      selH: 0
    })
  },

  // 选择 [CSGO]
  chooseSelH1: function () {
    this.setData({
      selH: 1
    })
  },

  // 选中 [饰品] selectProps
  selectProps: function(e){
    let Ind = e.currentTarget.dataset.ind
      , Arr = this.data.selectProps;
    // 根据数组中 下标元素的 True/ False 判断
    
    Arr[Ind] = !Arr[Ind];
    this.setData({
      selectProps: Arr
    })
  },

  // 筛选 -> 选中类别 selectKind
  selectKind: function(e){
    let Ind = e.currentTarget.dataset.ind;
    if (this.data.selH === 0 ){
      this.setData({
        selectKind: {
          '0': Ind,
          '1': 0
        }
      })
    } else if (this.data.selH === 1){
      this.setData({
        selectKind: {
          '0': 0,
          '1': Ind
        }
      })
    }
  },

  // 滑动 swiperSelH
  swiperSelH: function(e){
    let sel = e.detail.current;
    this.setData({
      selH: sel
    })
  },

  //  orderByVal 根据 [价值] 排序
  orderByVal: function () {
    this.setData({
      orderByValue: !this.data.orderByValue
    })
    this.orderRule();
  },


  // [价值] 排序函数
  orderRule: function () {
    const t = this;
    function by(resulte) {
      return function (a, b) {
        const val1 = a['resulte'];
        const val2 = b['resulte'];

        //  正反阀值 对应 正序 逆序
        if (t.data.orderByValue) {
          return val2 - val1;
        } else {
          return val1 - val2;
        }
      }
    }

    // 根据不同类型记录 分别双向绑定 赋值/重新排序数据
    switch (t.data.currentTab) {
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

  // toStep1  步骤1
  toStep1: function () {
    this.setData({
      stepStatus: 1
    })
  },

  // toStep0  步骤0
  toStep0: function () {
    this.setData({
      stepStatus: 0
    })
  },

  // 创建房间
  createRoom: function(){
    // 验证所有信息合法性 然后跳转 新建的房间页面
    
    wx.navigateTo({
      url: "../RmDetail/index"
    })

  },

  // slidePort 打开 筛选 侧边栏
  slidePort: function () {
    this.setData({
      slidePortStatus: false
    })

  },

  // 完成 选择条件 关闭 筛选 侧边栏
  confirm: function () {
    this.setData({
      slidePortStatus: true
    })
  },


  // resetChoose 重置 筛选条件
  resetChoose: function () {
    this.setData({
      selectKind: {
        '0': 0,
        '1': 0
      }
    })
  },


  // goBack 返回
  goBack: function () {
    wx.navigateBack({
      url: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let t = this;
    // wx.request({
    //   url: "https://account.vipgame.com/server/Inventory/",
    //   data: {
    //     "act": 'getRobot',
    //     "appid": t.data.appid,
    //     "repo": 0
    //   },
    //   success: function (e) {
    //     console.log( e.data)
    //   }
    // })  
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