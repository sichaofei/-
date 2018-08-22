// pages/shop/shop.js
const App=getApp().getapp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    zj:0,
    allSelected:"circle"
  },
// 数量加减
  changeNum(operation,e){
    let shop = e.currentTarget.dataset.item
   let arr=App.shop.filter((item,index)=>{
      return item.name==shop.name
    })
    if (operation=="add"){
      arr[0].count++
    }else{
      if(arr[0].count>0){
        arr[0].count--
      }
      
    }
    this.setData({list:App.shop})
    this.zj()
  },
// 加
add(e){
  this.changeNum("add", e)
  this.allSelected()
},
// 减
reduce(e){
  this.changeNum("reduce", e)
  this.allSelected()
},
// 点击全选
  allChange(){
    console.log(1)
    if(this.data.allSelected=="success"){
      this.setData({
        allSelected:"circle"
      })
    }else{
      this.setData({
        allSelected: "success"
      })
    }
    this.data.list.map((item, index) => {
      item.type = this.data.allSelected
    })
    this.setData({ list: this.data.list })
    this.zj()
  },
//  是否全选
allSelected(){
  if(this.data.list.length==0){
    this.setData({
      allSelected: "circle"
    })
  }else{
    let arr = this.data.list.every((item, index) => {
      return item.type == "success"
    })
    if (arr == false) {
      this.setData({
        allSelected: "circle"
      })
    } else {
      this.setData({
        allSelected: "success"
      })
    }
  }

},
  // 选中状态
selected(e){
  let index = e.currentTarget.dataset.index
  var item=this.data.list[index]
  if(item.type=='success'){
    item.type='circle'
  }else{
    item.type = 'success'
  }
  this.setData({
    list:this.data.list
  })
  this.zj()
  this.allSelected()
},
  // 总价
  zj() {
    let car=[]
    car=this.data.list.filter((item,index)=>{
      return item.type=='success'
    })
    let num=0
    car.map((item,index)=>{
      num += Number(item.count)*item.price
    })
    this.setData({
      zj:num
    })
  },
  // 删除选中
  remove(){
      let arr=this.data.list.filter((item,index)=>{
          return item.type=='success'
      })
      if(arr.length==0){
        wx.showModal({
          title: '提示',
          confirmColor:"#0EB6FF",
          content: '请先选中商品',
          success: function (res) {
            if (res.confirm) {
              
            } else if (res.cancel) {
              
            }
          }
        })
      }else{
       this.data.list.map((item,index)=>{
          if(item.type=='success'){
           let arr=App.shop.findIndex((data) => {
              return data.name==item.name
          })
            wx.showModal({
              title: '提示',
              confirmColor: "#0EB6FF",
              content: '确定删除吗',
              success: res=>{
                if (res.confirm) {
                  App.shop.splice(arr, 1)

                  this.setData({
                    list: App.shop
                  })
                  if (this.data.list.length == 0) {
                    this.setData({
                      allSelected: "circle"
                    })
                  }
                  this.zj()
                } else if (res.cancel) {

                }
              }
            })
          }
        })
        
      }
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.zj()
    wx.setNavigationBarTitle({
      title: '购物车'
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
    App.shop.map((item,index)=>{
      item.type="circle"
    })
    this.setData({
      list:App.shop
    },()=>{
      
    })
    this.zj()
    this.allSelected()
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