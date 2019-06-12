## 一、语法 
    arr.reduce( function (prev, cur, index, arr) {
        ...
    },init);
  其中，arr表示循环的数组，prev是上一次调用回调时返回的结果，每次调用的结果都会给prev，cur表示当前正在处理的数组元素，index表示当前正在处理数组的索引值。
init表示初始值。  
## 二、实例
    var arr = [1,2,3,4,5]  
1.求数组项之和  

    var sum = arr.reduce( function (prev, cur) {
        return prev + cur
    },0)
由于传入了初始值0，所以开始时prev的值为0，cur的值为数组第一项1，相加之后返回值为1，作为下一轮回调的prev值，然后再继续与下一个数组项相加，以此类推，直到完成所有的数组项的和并且返回。  

2 求数组项最大值

    var max = arr.reduce( function (prev,cur) {
      return Matn.max(prev,cur)
    })
由于没有传入初始值，所以开始的时候prev的值为数组第一项1，cur的值为数组第二项2，取两值最大值后进入下一轮回调。  

3.数组去重

    var newArr = arr.reduce( function (prev, cur) {
        prev.indexOf(cur) === -1 && prev.push(cur);
        return perv;
    },[]);
实现的原理如下：  
* 1 初始化一个空数组 []
* 2 将需要去重处理的数组中的第一项在初始化的数组中查找  
如果找不到，（空数组中没有需要去重处理的数组），就将该项添加到初始化数组中
* 3 将需要去重处理的数组中的第2项在初始化数组中查找  
如果找不到，就将该项继续添加到初始化数组中
* 4 将需要去重处理的数组中的第n项在初始化数组中查找  
如果找不到，就将该项继续添加到初始化数组  
* 5 将这个初始化数组返回
