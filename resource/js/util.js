module.exports = {
  request: function (opt) {
    if(opt.header == undefined){
      opt.header = {'content-type': 'application/json'}
      if (opt.method.toLowerCase() == 'post') {
        opt.header = {'content-type': 'application/x-www-form-urlencoded'}
      }
    }
    wx.request(opt);
  },
  notice: function (notice, icon='none', time=2000) {
    wx.showToast({title: notice, icon: icon, duration: time})
  },
  loading: function (type = 'show', text = "") {
    if (type == 'show') {
      wx.showLoading({title: text, mask: true})

      // 10 秒后自动去掉 loading
      setTimeout(function () {wx.hideLoading()}, 5000)
    } else {
      wx.hideLoading()
    }
  },
  navigateTo: function (pagePath, params = {}) {
    var path = this.getPagePath(pagePath, params);  

    wx.navigateTo({  
      url: path
    });
  },
  delHtmlTag: function (str) {
      //去掉所有的html标记
      return str.replace(/<[^>]+>/g, '');
  },
  /**  
  * 拼接地址的方法  
  * @param {string} pagePath - 页面路径，不包括查询参数  
  * @param {object} params - 要传递的查询参数对象  
  * @returns {string} 返回拼接好的完整地址  
  */  
  getPagePath: function (pagePath, params = {}) {  
    if (!params || Object.keys(params).length === 0) {  
      return pagePath; // 如果没有参数，则直接返回页面路径  
    }  
    
    // 拼接查询参数  
    const queryParams = Object.keys(params)  
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)  
      .join('&');  
    
    // 如果页面路径中已经有查询参数，则使用'&'连接新的查询参数，否则使用'?'  
    const separator = pagePath.includes('?') ? '&' : '?';  
    
    return `${pagePath}${separator}${queryParams}`;  
  }
}
