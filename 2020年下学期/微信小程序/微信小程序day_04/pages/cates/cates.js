// pages/cates/cates.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    cateList: [],
    // 右侧的商品数据
    cateData: [],
    //  被点击的左侧的菜单
    currentIndex: 0,
    // 右侧内容的滚动条距离顶部的距离
    scrollTop: 0,
  },
  // 接口的返回数据
  Cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.hanleGetCateList()
    this.getCates()
    // //  1 获取本地存储中的数据  (小程序中也是存在本地存储 技术)
    // const Cates = wx.getStorageSync("cates");
    // // 2 判断
    // if (!Cates) {
    //   console.log(1);
    //   // 不存在  发送请求获取数据
    //   this.getCates();
    // } else {
    //   // 有旧的数据 定义过期时间  10s 改成 5分钟
    //   if (Date.now() - Cates.time > 1000 * 10) {
    //     // 重新发送请求
    //     // this.getCates();
    //   } else {
    //     // 可以使用旧的数据
    //     this.Cates = Cates.data;
    //     let cateList = this.Cates.map(v => v.cat_name);
    //     let cateData = this.Cates[0].children;
    //     this.setData({
    //       cateList,
    //       cateData
    //     })
    //   }
    // }
  },


  // 获取分类数据
  getCates() {
    // console.log(this.Cates);
    var _this = this
    // 1 使用es7的async await来发送请求
    const res = wx.request({
      url: "https://www.uinav.com/api/public/v1/categories",
      success(res) {
        _this.setData({
          res: res
        })
      }
    })
    console.log(this.data);
    this.Cates = res;
    // console.log(this.Cates);
    // 把接口的数据存入到本地存储中
    wx.setStorageSync("cates", {
      time: Date.now(),
      data: this.Cates
    });
    // 构造左侧的大菜单数据

    // let cateList = this.Cates.map(v => v.cat_name);
    // 构造右侧的商品数据
    // let cateData = this.Cates[0].children;
    // this.setData({
    //   cateList,
    //   cateData
    // })
  },
  // 获取数据
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
          _this.setData({
            cateList: message,
            cateData: message[0].children
          })
      }
    })
  },





  // 左侧菜单的点击事件
  handleItemTap(e) {
    /* 
    1 获取被点击的标题身上的索引
    2 给data中的currentIndex赋值就可以了
    3 根据不同的索引来渲染右侧的商品内容
     */
    const {
      index
    } = e.currentTarget.dataset;

    
    // let cateData = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      // cateData,
      // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
      // scrollTop: 0
    })

  },

})