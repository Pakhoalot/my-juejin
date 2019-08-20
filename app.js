//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
         this.globalData.systemInfo = res;
      },
    })
  },
  globalData: {
    systemInfo: {},
    config: {
      
    }
  }
})