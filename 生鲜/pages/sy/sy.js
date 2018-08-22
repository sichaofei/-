// pages/sy/sy.js
const App = getApp().getapp
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
  src:"",
    syCurrent:0,
    list:[],
    goods:[]
  },
  // 收货地址
  address(){
    wx.chooseAddress({
      success: function (res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
  },
  la(){
    console.log(1)
  },
  // 调用相机
  camera(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  onPullDownRefresh() {
    wx.startPullDownRefresh()
    　　console.log('--------下拉刷新-------')
    　
  },
  // 首页轮播
  syBian(e){
    this.setData({
      syCurrent: e.detail.current
    })
  },
  syChange(e){
    console.log(e.currentTarget.dataset)
    this.setData({ syCurrent: e.currentTarget.dataset.index})
  },
  // list跳转页面
  goList(e){
    console.log(e.currentTarget.dataset.index)
    App.listIndex = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../list/list'
    })
  },
  // 加入购物车
  addShop(e){
    var item = e.currentTarget.dataset.item
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
      url: 'https://www.easy-mock.com/mock/5a223b51707056548f086d8b/hema/index_goodsSort',
      success: res=>{
        console.log(res.data.data.sorts)
        this.setData({ list: res.data.data.sorts})
      },
      
    })
    wx:wx.request({
      url: 'https://www.easy-mock.com/mock/5a223b51707056548f086d8b/hema/getIndexScrollX',
      success: res=>{
       
        wx.hideLoading()
        wx.hideNavigationBarLoading()
        console.log(res.data.data.goods)
        this.setData({
          goods: res.data.data.goods
        })
      },
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