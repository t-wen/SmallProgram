  //index.js
//获取应用实例
const app = getApp()

var types = ['default', 'primary', 'warn']

var pageObject = {
  settemp2:function(){
    wx.navigateTo({
      url: '../shoppinglist/index'
    })
  }
}

Page(pageObject)