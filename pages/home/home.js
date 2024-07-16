Page({
	data: {
		dateLs: [],
		date: '2016-09-01',
		time: '12:01',
		gender: 0,
		genderLs: ['请选择', '男', '女'],
	},
	// 首页展示数据
	onLoad: function () {
		var dateStart = '1000-00-00';
		var dateEnd = this.setCurrentDateString();

		this.setData({
			dateLs: [dateStart, dateEnd],
			date: dateEnd
		})
	},
	onShow: function(){
	},
	setCurrentDateString: function() {  
		// 创建Date对象  
		var now = new Date();  

		// 提取年、月、日  
		var year = now.getFullYear();  
		var month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月份+1，并确保是两位数  
		var day = now.getDate().toString().padStart(2, '0'); // 确保日期是两位数  

		// 格式化字符串  
		var currentDateString = year + '-' + month + '-' + day;  

		return currentDateString;
	},
	bindDateChange: function(e) {
		this.setData({
			date: e.detail.value
		})
	},
	bindTimeChange: function(e) {
		this.setData({
			time: e.detail.value
		})
	},
	bindPickerChange: function(e) {
		this.setData({
			gender: e.detail.value
		})
	}
})