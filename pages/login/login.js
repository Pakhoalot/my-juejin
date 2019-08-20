// pages/login/login.js
const config = getApp().globalData.config;
const utils = require('');

Page({
  data: {
    mobile: '',
    password: '',
  },
  login(params, Type) {
    wx.showLoading({
      title: '加载中...',
    });
    let url = Type === 1 ? config.loginRequestUrlByMobile: config.loginRequestUrlByEmail;
  }
})