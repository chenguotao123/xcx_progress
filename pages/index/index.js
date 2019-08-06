//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 模拟这是后台传回来的数据
    list: [{
      id: 1,
      name: '我是第1个数据'
    },{
      id: 2,
      name: '我是第2个数据'
    },{
      id: 3,
      name: '我是第3个数据'
    },{
      id: 4,
      name: '我是第4个数据'
    }]
  },
  onLoad() {
    // 模拟这是接口请求回来的数据
    const list = this.data.list
    list.map((item, index) => {
      // 给每一项增加一个切换的标识
      item.isShow = false
    })
    this.setData({ list })
  },
  // 点击菜单
  handleTab(e) {
    const key = e.currentTarget.dataset.index
    const list = this.data.list
    list.map((item, index) => {
      if (key === index) {
        item.isShow = !item.isShow
      } else {
        item.isShow = false
      }
    })
    this.setData({ list })
  }
})
