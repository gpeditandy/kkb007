// components/movie/movie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGoToDetail(event) {
      let mid = this.properties.movie.id
      let title = this.properties.movie.title
      console.log(this.properties.movie.id)
      console.log(title)
      wx.navigateTo({
        url: '/pages/movie-detail/movie-detail?mid=' + mid +'&title=' + title,
      })
    }
  }
})
