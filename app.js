// 配置js
var conf = require('./resource/js/conf.js'),
    util = require('./resource/js/util.js');
    
//app.js
App({
  globalData: {
    userInfo: null,
    token: '159357'
  },
  onLaunch: function () {
    var self = this;
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
  },
  getUserData:function(userinfo,code){
    var self = this;
    /*
    util.request({
        url: conf.getUserInfoUrl,
        data:{'userInfo':userinfo.userInfo,'encryptedData':userinfo.encryptedData,'iv':encodeURIComponent(userinfo.iv),'code':code.code},
        method:'POST',
        header:{'content-type': 'application/x-www-form-urlencoded'},
        success: function (callback) {
          // console.log(callback);
          if(callback.data.flag){
              self.globalData.userInfo = callback.data.data;
              wx.setStorageSync('userInfo_openid', callback.data.data.weixin_openid);
          }
        }
    })
	*/
  }
})