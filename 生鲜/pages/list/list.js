// pages/list/list.js
const App = getApp().getapp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  // 加入购物车
  addShop(e){

    let item = e.currentTarget.dataset.item
    App.car(item)
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
      url: "https://www.easy-mock.com/mock/5a223b51707056548f086d8b/hema/getGoods",
      success: res=> {
        console.log(res.data.data[App.listIndex])
        this.setData({
          list: res.data.data[App.listIndex]
        })
        wx.hideLoading()
        wx.hideNavigationBarLoading()
      },
      
    })
  },
 goShop:function(){
    console.log(1)
   wx.switchTab({
     url: '../shop/shop'
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