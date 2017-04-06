define(['jquery', 'jqueryCookie', 'template'], function ($, undefine, template) {

    //获取左上角头像姓名
    (function () {
        // 1、获取本地存储的用户信息
        var userInfoStr = $.cookie('userInfo');

        // 2、把用户信息解析为js对象方便使用
        var userInfoObj = JSON.parse(userInfoStr);

        // console.log(userInfoObj);


        var prifileTpl =
            '<div class="profile">' +
            '<div class="avatar img-circle">' +
            '<img src="' + userInfoObj.tc_avatar + '">' +
            '</div>' +
            '<h4>' + userInfoObj.tc_name + '</h4>' +
            ' </div>';

        $('.aside').prepend(prifileTpl);
    })();

    (function(){
        // 点击具有下拉列表功能的a标签，那么展示隐藏对应的ul列表
		$('#course-list').on('click', function() {
			$(this).next().slideToggle();
		});
    })();

    // 根据页面定位左侧导航焦点
	(function() {
		
		/**
		 * 根据一些页面规律进行焦点
		 * 1、获取当前页面的路径
		 * 2、移除所有a标签的active类名
		 * 3、把路径当做属性选择器选择页面对应的a标签，给对应的a标签单独添加
		 * */
		/*var pathname = location.pathname;
		$('.navs a').removeClass('active').filter('[href="' + pathname + '"]').addClass('active');*/
		
		
		/**
		 * 还有一些子页面或者隐藏比较深的页面，这些页面在导航左侧没有对应的列表，
		 * 那么我们可以手动添加一些配置，单独指定那些页面应该对应那个a标签。
		 * 1、把所有页面的路径与对应的左侧列表href使用key，value的方式映射
		 * 2、获取当前页面的路径
		 * 3、然后使用这个路径去对应的配置中查找
		 * 3.1、如果找到对应的配置值，那么使用这个值去找对应的a标签
		 * 3.2、如果没有找到，就直接使用这个路径去找对应的a标签
		 * 4、移除所有a标签的active类名
		 * 5、获取页面对应的a标签，给它单独添加active类名
		 * */
		
		var pathHref = {
			'/html/teacher/teacher_add.html': '/html/teacher/teacher_list.html'
		};
		var pathname = location.pathname;
		var aHref = pathHref[pathname]? pathHref[pathname]: pathname;
		$('.navs a').removeClass('active').filter('[href="' + aHref + '"]').addClass('active');
		
	})();
})