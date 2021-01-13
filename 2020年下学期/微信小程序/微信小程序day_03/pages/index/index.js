Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    // 轮播图
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/swiperdata', //仅为示例，并非真实的接口地址
      success(res) {
        _this.setData({
          background: res.data.message
        })
      }
    })
    // 分类列表
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/catitems', //仅为示例，并非真实的接口地址
      success(res) {
        // console.log(res);
        _this.setData({
          cates: res.data.message
        })
        // console.log(1);
        console.log(_this.data);
      }
    })
    // 首页底部的楼层
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/floordata', //仅为示例，并非真实的接口地址
      success(res) {
        // console.log(res);
        _this.setData({
          floorList: res.data.message
        })
        // console.log(1);
        console.log(_this.data);
      }
    })
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