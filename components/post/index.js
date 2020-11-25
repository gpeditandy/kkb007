// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // text:{
    //   type:String,
    //   value:"123"
    // },
    res:Object
  },
  /**
   * 组件的初始数据
   */
  data:{

  },
  /**
   * 组件的方法列表
   */
  methods:{
    onGoToDetail(event) {
      // console.log(event.currentTarget.dataset.postId)
      // const pid = event.currentTarget.dataset.postId;
      // wx.navigateTo({
      //   url: '/pages/post-detail/post-detail?pid='+pid,
      // })
      // const pid = event.currentTarget.dataset.postId;
      const pid = this.properties.res.postId
      console.log(pid)
      this.triggerEvent("posttap",{
        pid:pid,
        test:'我是一个兵',
        title:this.properties.res.title
      })
    },
  }
})