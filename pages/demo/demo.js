// pages/demo/demo.js
Page({
    data: {
        num:0
    },
    handleInput( e ){
        // console.log("**");
        this.setData({
            num: e.detail.value
        })
    },
    handleTap(e){
        const operation = e.currentTarget.dataset.operation;
        this.setData({
            num: this.data.num + operation
        })
    }
})