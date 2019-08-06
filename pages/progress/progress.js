const app = getApp();
// 定时器变量
let timer = null;
Page({
    data: {
        startPointX: 0,  // 进度条的值, 设置这个即可(共100)
    },
    onLoad() {
        // 设置80%
        this.setNum(50)
    },
    setNum(n) {
        let step = 1, endAngle = 0
        if (n < 10) {
            this.setData({
                startPointX: n
            })
        } else {
            let animation = () => {
                if (endAngle < n) {
                    endAngle = Math.floor(step * 8 * Math.PI / n + 1.5 * Math.PI)
                    this.setData({
                        startPointX: endAngle
                    })
                    step ++
                } else {
                    clearInterval(timer)
                }
            };
            timer = setInterval(animation, n > 60? 2 : 10)
        }
    },
    // 清除定时器
    onUnload() {
        clearInterval(timer)
    }
});
