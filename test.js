var count=require('./count');

// 满减前总价
//console.log(count.getTotal([23,24,21,20,12]));
// 每人优惠额度
//console.log(count.getYh([23,24,21,20,12],34.6));
// 每人最终价格
console.log(count.getResult([21,21,14],16.9));
// 满减后总价格
console.log(count.getRTotal([21,21,14],16.9));