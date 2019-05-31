var a =[
    {
        nodeType:'2',
        chPrice: 60433.650883,
        close: "8636.71",
        high: "8636.71",
        low: "8623.63",
        main_cur: "USDT",
        open: "8624.03",
        secondary_cur: "BTC",
        trading: "BTC/USDT",
        updown: 0.0078,
        volume: 289728.0667,
        subType: '6'
    },
    {
        nodeType:'2',
        chPrice: 60433.650883,
        close: "8636.71",
        high: "8636.71",
        low: "8623.63",
        main_cur: "USDT",
        open: "8624.03",
        secondary_cur: "BTC",
        trading: "BTC/USDT",
        updown: 0.0078,
        volume: 289728.0667,
        subType: '6'
    },
    {
        nodeType:'2',
        chPrice: 60433.650883,
        close: "8636.71",
        high: "8636.71",
        low: "8623.63",
        main_cur: "USDT",
        open: "8624.03",
        secondary_cur: "BTC",
        trading: "BTC/USDT",
        updown: 0.0078,
        volume: 289728.0667,
        subType: '3'
    },
    {
        nodeType:'1',
        chPrice: 60433.650883,
        close: "8636.71",
        high: "8636.71",
        low: "8623.63",
        main_cur: "USDT",
        open: "8624.03",
        secondary_cur: "BTC",
        trading: "BTC/USDT",
        updown: 0.0078,
        volume: 289728.0667,
        subType: '6'
    },
    {
        nodeType:'1',
        chPrice: 60433.650883,
        close: "8636.71",
        high: "8636.71",
        low: "8623.63",
        main_cur: "USDT",
        open: "8624.03",
        secondary_cur: "BTC",
        trading: "BTC/USDT",
        updown: 0.0078,
        volume: 289728.0667,
        subType: '6'
    }
] 
//    需求  摘出来nodeType === 2 的数据重新组成一个json数据
a.filter( item=>{
    return item.nodeType === "2"
    console.log("dsdsdsd",a)
}).filter( item =>  {
    return item.subType === "6"
    console.log("dsdsdsd",a)
})


// 使用filter不会改变原数组，必须设置一个变量