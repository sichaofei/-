// pages/fl/fl.js
const App=getApp().getapp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sorts:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: '加载中',
    })
    wx:wx.request({
      url: 'https://www.easy-mock.com/mock/5a223b51707056548f086d8b/hema/sortItems',
      success: res=>{
        console.log(res.data.data.sorts)
        this.setData({
          sorts: res.data.data.sorts
        })
        wx.hideLoading()
        wx.hideNavigationBarLoading()
      },
      
    })
  },
// 跳转list
golist(e){
  console.log(e.currentTarget.dataset.index)
  App.listIndex = e.currentTarget.dataset.index
  wx.navigateTo({
    url: '../list/list'
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