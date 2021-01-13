// pages/cates/cates.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList: [],
    cateData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.hanleGetCateList()
  },

  hanleGetCateList() {
    var _this = this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/categories', //仅为示例，并非真实的接口地址
      success(res) {
        const {
          message,
          meta
        } = res.data
        if (meta.status == 200)
          console.log(1);
        _this.setData({
          cateList: message,
          cateData: message[0].children
          
        })
        console.log(_this.data)
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