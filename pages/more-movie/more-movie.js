const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    _type:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type)
    const type = options.type;
    this.setData({
      _type:type
    })
    // this._type = type
    wx.request({
      url: app.gBaseUrl + type,
      method:'GET',
      data:{
        start:0,
        count:12
      },
      success:(res => {
        console.log(res)
        this.setData({
          movies:res.data.subjects
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let title = '电影'
    switch(this.data._type) {
      case 'in_theaters':
        title = "正在热映"
        break;
      case 'coming_soon':
        title = "即将上映"
        break;
      case 'top250':
        title = "top250"
        break;
    }
    wx.setNavigationBarTitle({
      title:title
    })
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
    console.log("下拉刷新中...")
    wx.request({
      url: app.gBaseUrl + this.data._type,
      method:'GET',
      data:{
        start:0,
        count:12
      },
      success: (res) =>{
        this.setData({
          movies:res.data.subjects
        })
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    wx.showNavigationBarLoading()
    wx.request({
      url: app.gBaseUrl + that.data._type,
      method:'GET',
      data:{
        start:this.data.movies.length,
        count:12
      },
      success:(res => {
        console.log(res)
        wx.hideNavigationBarLoading()
        this.setData({
          movies:this.data.movies.concat(res.data.subjects)
        })
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})