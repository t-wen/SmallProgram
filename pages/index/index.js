//index.js
//获取应用实例
const app = getApp()

var types = ['default', 'primary', 'warn']

var pageObject = {
  data: {
<<<<<<< HEAD
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
}

for (var i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page({
  data: {
    motto: '欢迎来到Tracy闲置'
  },
=======
    motto: '欢迎来到Tracy闲置'
  },
>>>>>>> c3b9dd5a39a7fe82262af3b9c2235d199fca7cc6
  imageError: function (e) {
    console.log('image发生erro事件,携带值为', e.detail.errMsg)
  }
})


