function second (arr,data){
    //首先对于arr 进行排序
    let handleArr =  arr.sort((a,b)=>a-b);
    //定义左边
    let left = 0
    //定义右边
    let right  =  handleArr.length-1
    let middle

    while(left<=right){
        //定义中间的值
         middle =  Math.floor((left+right)/2)  ;
         console.log(middle,handleArr[middle])
        if(handleArr[middle]>data){
            left = middle+1
        }else if(handleArr[middle]<data){
            right = middle-1
        }else if(data==handleArr[middle]){
            return middle
        }

        
    }
    return -1
 

}
 //二分法



console.log(second([1,2,3,4,5,6,7,8,9,10],5))