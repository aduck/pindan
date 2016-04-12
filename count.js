/* 
*	@arr 每人价格数组
*	@yh 优惠说明（满减+优惠券-配送）
*/
function getTotal(arr){
	var total=0;
	for(var i=0,len=arr.length;i<len;i++){
		total+=arr[i];
	}
	return total;
}
function getYh(arr,yh){
	var total=getTotal(arr),
		yhArr=[];
	for(var i=0,len=arr.length;i<len;i++){
		yhArr.push(arr[i]/total*yh);
	}
	return yhArr;
}
function getResult(arr,yh){
	var result=[],
		yhArr=getYh(arr,yh);
	for(var i=0,len=arr.length;i<len;i++){
		result.push(arr[i]-yhArr[i]);
	}
	return result;
}
function getRTotal(arr,yh){
	var result=getResult(arr,yh),
		rTotal=0;
	for(var i=0,len=result.length;i<len;i++){
		rTotal+=result[i];
	}
	return rTotal;
}

exports.getTotal=getTotal;
exports.getYh=getYh;
exports.getResult=getResult;
exports.getRTotal=getRTotal;