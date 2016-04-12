# pindan
多人拼单计算<br>
使用模块：<br>
var count=require('count');<br>
/*<br>
@ arr 每人商品价格<br>
@ yh 总共优惠金额（减去运费）<br>
*/<br>
count.getTotal(arr) &nbsp;返回优惠前总价格<br>
count.getYh(arr,yh) &nbsp;返回每人优惠金额<br>
count.getResult(arr,yh) &nbsp;返回最后结果（每人需支付金额）<br>
count.getRTotal(arr,yh) &nbsp;返回优惠后总金额<br>
