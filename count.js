/* 
* @ orders 所有订单（餐盒费需包含在内）
* @ prefer 优惠金额（满减+优惠券）
* @ fare   配送费
*/

module.exports={
  getTotal(orders){
    return orders.reduce((pre,cur)=>{
      return pre+cur
    })
  },
  getTotalPrice(orders,prefer,fare){
    let total=this.getTotal(orders)
    return total-prefer+fare
  },
  getResult(orders,prefer,fare){
    let total=this.getTotal(orders)
    return orders.map(order=>{
      return order-order/total*(prefer-fare)
    })
  }
}