// 配置js
var conf = require('../../resource/js/conf.js'),
  util = require('../../resource/js/util.js');

// pages/plate/plate.js
Page({
  data: {
    pageTitle: '紫微排盘',
    dateTimeData: {}
  },
  onLoad(options) {
    var self = this;
    var requestData = {
      'dateType': options.dateType,
      'gender': options.gender,
      'date': options.date,
      'time': decodeURIComponent(options.time),
      'lunar': decodeURIComponent(options.lunar),
      'Hour': options.Hour
    }
    requestData = {
      Hour: "0",
      date: "2024-01-01",
      dateType: "1",
      gender: "1",
      lunar: "2024年/一月/初一",
      time: "00:00"
    }

    // 请求接口
    util.loading('show');
    util.request({
      url: conf.plateSortUrl,
      data: requestData,
      method: 'POST',
      success: function (callback) {
        util.loading('hide');
        self.setData({
          dateTimeData: callback.data.dateTimeData
        })
      }
    })
  },
  onUnload() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {}


  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage() {}

  // 定义一个函数来判断属性是否存在  
})