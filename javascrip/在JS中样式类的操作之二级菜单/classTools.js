	//定义一个函数，用来向一个元素中添加指定的class属性值
			/*
			 * 参数:
			 * 	obj 要添加class属性给的这个对象box,id1
			 *  cn 要添加的class值,例如b2
			 * 	
			 */
            function addClass(obj,cn){
                if(!hasClass(obj,cn)){
                    obj.className = obj.className + " " + cn;//要个空格
                }
            }


             /*
			 * 判断一个元素中是否含有指定的class属性值
			 * 	如果有该class，则返回true，没有则返回false	
			 */
            function hasClass(obj,cn){
                var reg = new RegExp('\\b'+cn+'\\b');
                return reg.test(obj.className);
            };
            /*
			 * 删除一个元素中的指定的class属性
			 */
            function remove(obj,cn){
                var reg = new RegExp('\\b'+cn+'\\b');
                obj.className = obj.className.replace(reg,'');
            }
            /*
			 * toggleClass可以用来切换一个类
			 * 	如果元素中具有该类，则删除
			 * 	如果元素中没有该类，则添加
			 */
            function toggleClass(obj,cn){
                if(hasClass(obj,cn)){
                    remove(obj,cn);
                }else{
                    addClass(obj,cn);
                }
            }