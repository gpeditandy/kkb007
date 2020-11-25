const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    theaters:[],
    coomingSoon:[],
    top250:[],
    searchResult:false,
    searchData:[],
    lValue:''
  },
  onGoToMore(e) {
    console.log(e.currentTarget.dataset.type)
    const type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type='+type
    })
  },
  onConfirm(e) {
    this.setData({
      searchResult:true,
      lValue:''
    })
    const keywords = e.detail.value;
    wx.request({
      url: app.gBaseUrl + 'search?q=' + keywords,
      success:(res) =>{
        this.setData({
          searchData:res.data.subjects
        })
      }
    })
  },
  onSearchCancel(e) {
    console.log("点击了取消")
    console.log(e)
    this.setData({
      searchResult:false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      method:'GET',
      data:{
        start:1,
        count:3
      },
      success:(res => {
        console.log(res)
        this.setData({
          theaters:res.data.subjects
        })
      })
    })
    wx.request({
      url: app.gBaseUrl + 'coming_soon',
      method:'GET',
      data:{
        start:1,
        count:3
      },
      success:(res => {
        console.log(res)
        this.setData({
          coomingSoon:res.data.subjects
        })
      })
    })
    wx.request({
      url: app.gBaseUrl + 'top250?start=6&count=3',
      success:(res => {
        console.log(res)
        this.setData({
          top250:res.data.subjects
        })
      })
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