// 配置js
var conf = require('../../resource/js/conf.js'),
	util = require('../../resource/js/util.js');

Page({
	data: {
		pageTitle: '非凡天机',
		dateType: 1,
		dateLs: [],
		date: '2016-09-01',
		lunarLs: [],
		lunarDateLs: [],
		monthLs: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		dateLs: ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七','十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'],
		time: '00:00',
		Hour: 0,
		HourLs: ['请选择','子时 (23~01)', '丑时 (01~03)', '寅时 (03~05)', '卯时 (05~07)', '辰时 (07~09)', '巳时 (09~11)', '午时 (11~13)', '未时 (13~15)', '申时 (15~17)', '由时 (17~19)', '戌时 (19~21)', '亥时 (21~23)'],
		gender: 0,
		genderLs: ['请选择', '男', '女'],
	},
	// 首页展示数据
	onLoad: function () {
		var startYear = '1000'
		var dateStart =  startYear + '-00-00';
		var dateEnd = this.setCurrentDateString();
		var year = dateEnd.split('-')[0];

		// 获取所有年份
		let yearLs = [];
		let num = 0;
		// 使用循环从start遍历到end（包括end）  
		for (let i = startYear; i <= year; i++) {
			num = i - startYear;
			yearLs.push(i + '年'); // 将每个数字添加到数组中  
		}

		// 阴历
		var lunarDateLs = [];
		lunarDateLs.push(yearLs);
		lunarDateLs.push(this.data.monthLs);
		lunarDateLs.push(this.data.dateLs);

		var lunarLs = [];
		lunarLs.push(num);
		lunarLs.push(0);
		lunarLs.push(0);
      
		this.setData({
			dateLs: [dateStart, dateEnd],
			date: year + '-01-01',
			lunarDateLs: lunarDateLs,
			lunarLs: lunarLs
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
	bindCalendarType: function(e) {
	    var type = e.currentTarget.dataset.type;
	    this.setData({
			dateType: type
		})
	},
	bindDateChange: function(e) {
		this.setData({
			date: e.detail.value
		})
	},
	bindLunarDateChange: function(e) {
		this.setData({
			LunarDate: e.detail.value
		})
	},
	bindTimeChange: function(e) {
		this.setData({
			time: e.detail.value
		})
	},
	bindHourChange: function(e) {
		this.setData({
			Hour: e.detail.value
		})
	},
	bindPickerChange: function(e) {
		this.setData({
			gender: e.detail.value
		})
	},
	bindMultiPickerColumnChange: function (e) {
		var data = {
			lunarDateLs: this.data.lunarDateLs,
			lunarLs: this.data.lunarLs
		};
		data.lunarLs[e.detail.column] = e.detail.value;
		// if(e.detail.column == 0){
		// 	data.lunarLs[1] = 0;
		// 	data.lunarLs[2] = 0;
		// }
		// if(e.detail.column == 1){
		// 	data.lunarLs[2] = 0;
		// }
		this.setData(data);
	},
	bindSearch: function (e) {
		var dateType = this.data.dateType;
		var gender = this.data.gender
		var date = this.data.date
		var time = this.data.time
		var lunar = this.data.lunarDateLs[0][this.data.lunarLs[0]] + '/' + this.data.lunarDateLs[1][this.data.lunarLs[1]] + '/' + this.data.lunarDateLs[2][this.data.lunarLs[2]]
		var Hour = this.data.Hour

		if (dateType ==2 && Hour == 0) {
			util.notice('请选择生时')
			return false
		}
		if (gender == 0) {
			util.notice('请选择性别')
			return false
		}

		// 组织数据
		var requestData = {
			'dateType': dateType,
			'gender': gender,
			'date': date,
			'time': time,
			'lunar': lunar,
			'Hour': Hour
		}

		util.navigateTo('/pages/plate/plate', requestData)
	},
})