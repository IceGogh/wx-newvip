// pages/login/regist/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyInVerify: false,
    getCodeStatus: true,
    getCode: "获得验证码",
    uid: '',
    uidCheck: false,
    code: '',
    password: '',
    password2: '',
    pwChk: false,
    pwChk2: false,
    alertFlag: false,
    alertWords: "两次输入密码不一致，请重新输入"
  },


  // 账号 uid
  keyUid: function(e){
    let val = e.detail.value;
    this.setData({
      uid: val
    });
    // 验证是否为手机号或者邮箱
    if (/^1[3|4|5|7|8]\d{9}$/.test(val) || /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(val)){
      this.setData({
        getCode: "获得验证码",
        keyInVerify: true
      })
    }else{
      this.setData({
        getCode: "错误手机号/邮箱",
        keyInVerify: false
      })
    }
  },

  // getCoding 获取验证码
  getCoding: function(){
    if (this.data.keyInVerify && this.data.getCodeStatus){
      let t = this
      , Sec = 60;
      t.setData({
        getCodeStatus: false,
        getCode: Sec
      })
      let Timer = setInterval(function(){
        if( Sec > 0){
          Sec --;
          t.setData({
            getCode: Sec
          })
        }else{
          t.setData({
            getCode: "获取验证码",
            getCodeStatus: true
          })
        }
      }, 1000)
    }
  },

  // keyPw 密码
  keyPw: function(e){
    let val = e.detail.value;
    if (val.split('').length >=8 ){
      this.setData({
        pwChk: true,
        password: val
      })
    }else{
      this.setData({
        pwChk: false
      })
    }
  },

  // keyPw2 确认密码
  keyPw2: function(e){
    let val = e.detail.value
      , preVal = this.data.password;
    if (val === preVal){
      this.setData({
        pwChk2: true,
        password2: preVal
      })
    }else{
      this.setData({
        pwChk2: false
      })
    }   
  },

  // 确定 signing
  signing: function(){
    // 防止恶意多次点击
    if (this.data.alertFlag){
      return false;
    }
    let t = this;
    // 资料合法性验证拦截
    if (t.data.keyInVerify && t.data.pwChk2){
      // 执行回调
    }else{
      t.setData({
        alertFlag: true
      })

      setTimeout(function(){
        t.setData({
          alertFlag: false      
        })
      }, 1500)
    }
  },

  // goBack 返回登录
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