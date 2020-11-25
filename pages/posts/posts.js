// var postData = require("../../data/data.js")
// console.log(postData)
import {postList} from '../../data/data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res:{
      test:"123"
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad:async function (options) {
    this.setData({
      postList
    })
    console.log(postList)
    wx.setStorageSync('flag', 666)
    //wx.setStorageSync('flag', false)
    //wx.setStorageSync('flag1', 1)
    //wx.removeStorageSync('flag')
    //wx.clearStorageSync()
    //const flag = wx.getStorageSync('flag');
    //这是老版获取到storage的方法 1)
    const flag = await wx.getStorage({
      key: 'flag',
      // success(res) {
      //   console.log(res.data)
      // }
    })
    //这是新版获取到storage的方法 2)
    // flag.then((value) => {
    //   console.log(value)
    // })
    //这是第三种方法 3)
    // async + await
    console.log(flag)
  },

  goToDetail(e) {
    console.log(e)
    const pid = e.detail.pid
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid=' + pid,
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