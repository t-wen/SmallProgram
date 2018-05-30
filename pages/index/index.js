//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎来到Tracy闲置'
  },
  imageError: function (e) {
    console.log('image发生erro事件,携带值为', e.detail.errMsg)
  }
})
