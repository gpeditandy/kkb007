// pages/post-detail/post-detail.js
import {postList} from '../../data/data.js';
const app = getApp()
console.log(app)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    _pid:null,
    collected:false,
    _postsCollected:{},
    isPlaying:false,
    _mgr:null
  },
  onCollect() {
    const postsCollected = this.data._postsCollected;
    console.log(postsCollected)
    postsCollected[this.data._pid] = !this.data.collected;
    this.setData({
      collected:!this.data.collected
    })
    wx.setStorageSync('posts_collected', postsCollected)
    wx.showToast({
      title: this.data.collected?'收藏成功':'取消收藏',
      duration:3000
    })
  },
  async onShare(event){
    const result = await wx.showActionSheet({
      itemList: ['分享到QQ','分享到微信','分享到朋友圈']
    })
    console.log(result)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const postData = postList[options.pid];
    console.log(postData)
    this.data._pid = options.pid;
    const postsCollected = wx.getStorageSync('posts_collected')
    this.data._postsCollected = postsCollected
    let collected = postsCollected[this.data._pid]
    if(collected===undefined) {
      // 如果undefined 说明文章从来没有被收藏过
      collected = false
    }
    this.setData({
      postData,
      collected,
      isPlaying:this.currentMusicIsPlay()
    })
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    mgr.onPlay(this.onMusicStart)
    mgr.onPause(this.onMusicStop)
    //mgr.onPause(this.onMusicStop)
  },
  currentMusicIsPlay() {
    if(app.gIsPlayingMusic && app.gIsPlayingPostId===this.data._pid) {
      return true
    } else {
      return false
    }
  },
  onMusicStart(event) {
    console.log("开始播放")
    const mgr = this.data._mgr;
    const music = postList[this.data._pid].music
    mgr.src = music.url;
    mgr.title = music.title;
    mgr.coverImgUrl = music.coverImg
    app.gIsPlayingMusic = true
    app.gIsPlayingPostId = this.data._pid
    this.setData({
      isPlaying:true
    })
  },
  onMusicStop(event) {
    console.log("暂停播放")
    const mgr = wx.getBackgroundAudioManager()
    mgr.pause();
    app.gIsPlayingMusic = false
    app.gIsPlayingPostId = -1
    this.setData({
      isPlaying:false
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