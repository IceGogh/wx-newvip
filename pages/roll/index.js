// pages/roll/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roll1: [
      {
        "name": "heytoo",
        "photo": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/171028/X000694X.jpg",
        "room": "234234",
        "locked": true,
        "time": "3小时候后",
        "propsImg": [
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png"
        ],
        "propsImgNub": 12,
        "joined": 120,
        "total": 200,
        "propsVal": 20000,
        "props": 20
      },
      {
        "name": "unloackRm2",
        "photo": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/171028/X000694X.jpg",
        "room": "333333",
        "locked": false,
        "time": "32小时候后",
        "propsImg": [
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png"
        ],
        "propsImgNub": 212,
        "joined": 122,
        "total": 202,
        "propsVal": 20002,
        "props": 20
      }
      
      
    ],
    roll2: [
      {
        "name": "黑土创建1",
        "photo": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/171028/X000694X.jpg",
        "room": "234234",
        "locked": true,
        "time": "3小时候后",
        "propsImg": [
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png"
        ],
        "propsImgNub": 12,
        "joined": 120,
        "total": 200,
        "propsVal": 20000,
        "props": 20
      },
      {
        "name": "黑土创建2",
        "photo": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/171028/X000694X.jpg",
        "room": "333333",
        "locked": true,
        "time": "32小时候后",
        "propsImg": [
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png"
        ],
        "propsImgNub": 212,
        "joined": 122,
        "total": 202,
        "propsVal": 20002,
        "props": 20
      }


    ],
    roll3: [
      {
        "name": "黑土创建1",
        "photo": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/171028/X000694X.jpg",
        "room": "234234",
        "locked": true,
        "time": "3小时候后",
        "propsImg": [
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png"
        ],
        "propsImgNub": 12,
        "joined": 120,
        "total": 200,
        "propsVal": 20000,
        "props": 20
      },
      {
        "name": "黑土创建2",
        "photo": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/171028/X000694X.jpg",
        "room": "333333",
        "locked": true,
        "time": "32小时候后",
        "propsImg": [
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png"
        ],
        "propsImgNub": 212,
        "joined": 122,
        "total": 202,
        "propsVal": 20002,
        "props": 20
      }


    ],
    roll4: [
      {
        "name": "黑土创建1",
        "photo": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/171028/X000694X.jpg",
        "room": "234234",
        "locked": true,
        "time": "3小时候后",
        "propsImg": [
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png"
        ],
        "propsImgNub": 12,
        "joined": 120,
        "total": 200,
        "propsVal": 20000,
        "props": 20
      },
      {
        "name": "黑土创建2",
        "photo": "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/171028/X000694X.jpg",
        "room": "333333",
        "locked": true,
        "time": "32小时候后",
        "propsImg": [
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png",
          "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005BVM.png"
        ],
        "propsImgNub": 212,
        "joined": 122,
        "total": 202,
        "propsVal": 20002,
        "props": 20
      }


    ],
    "currentTab": 0
  },

  // 选择 Tab swiperChange
  swiperChange: function(e){
    let Tab = e.detail.current;
    this.setData({
      currentTab: Tab
    })
  }, 

  // 选择 Tab selTab 
  selTab: function(e){
    let Tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: Tab
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