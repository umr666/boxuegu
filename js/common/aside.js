define(['jquery', 'jqueryCookie', 'template'],function($,undefine,template){
    // 1、获取本地存储的用户信息
	var userInfoStr = $.cookie('userInfo');
	
	// 2、把用户信息解析为js对象方便使用
	var userInfoObj = JSON.parse(userInfoStr);

    
        var prifileTpl=    '<div class="avatar img-circle">'+
                '<img src="/img/avatar.jpg">'+
            '</div>'+
            '<h4>布头儿</h4>'+
       ' </div>';
})