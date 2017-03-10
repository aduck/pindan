### 美团饿了么拼单计算器

> 点饭是件痛苦的事，几个同事一起点饭，每天计算个价格也是麻烦，没法谁让穷呢orz~~   
> 小数点？0.1+0.2明明等于0.30000000000000004

开始吧！

    let orders = [18,22,20]  // 17元的饭+1元餐盒 21元的饭+1元餐盒 19元的饭+1元餐盒
    let prefer = 15+8  // 25减15 8元红包
    let fare = 5  // 配送费5元
    const count = require('./count')
    console.log(count.getResult(orders,prefer,fare))  // 打印所有人交多少份子钱
    console.log(count.getTotalPrice(orders,prefer,fare))  // 打印总共支付多少钱

