  //index.js
//获取应用实例
const app = getApp()

var types = ['default', 'primary', 'warn']

var pageObject = {
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  backtouppage:function()
  {
    wx.navigateBack()
  }
}

Page(pageObject)