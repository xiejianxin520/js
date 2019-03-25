//尝试创建一个可以执行简单动画的函数
/*
 * 参数：
 * 	obj:要执行动画的对象
 *  target:执行动画的终点位置(不需要单位)
 * 	speed:移动的速度
 * 	attr:要执行动画的样式，比如：left 。都是字符串要加“”
 *  callback:回调函数，这个函数将会在动画执行完毕以后执行
 */

        function move(obj,target,speed,attr,callback) {
            clearInterval(obj.timer);

        var current = parseInt(staystyle(obj,attr));
        //判断速度的正负值
        //如果从0 向 800移动，则speed为正
        //如果从800向0移动，则speed为负
        if(current > target){
            //此时速度应为负值
            speed = -speed;
        };//速度要在外面判断然后赋值进去；不能写在定时函数里面去

        obj.timer = setInterval(function(){

            var oldvalue = parseInt(staystyle(obj,attr));


            var newvalue = oldvalue + speed;

            if((speed>0 && newvalue>target)||(speed<0 && newvalue<target)){
                newvalue = target;
            }
            //attr现在是个变量要用【】，不能用.attr
            obj.style[attr] = newvalue +'px';

         if(newvalue == target){
                clearInterval(obj.timer);
                callback && callback();
            }   
        },30)
     }

     /*
 * 定义一个函数，用来获取指定元素的当前的样式
 * 参数：
 * 		obj 要获取样式的元素
 * 		name 要获取的样式名
 */
        function staystyle(obj , name){
         if(window.getComputedStyle){
             return getComputedStyle(obj,null)[name];
         }else{
             return  obj.currentStyle[name];
         }
     } 
