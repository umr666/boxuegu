define(['jquery','jqueryCookie', 'nprogress'], function($,undefine,nprogress) {

	var cookieArr = document.cookie.split('; ');
	for(var i=0;i<cookieArr.length;i++){
        if(cookieArr[i].indexOf('PHPSESSID=') === 0){
            location.href='/';
        }

    }

    $('#login-form').on('submit',function(){
        $.ajax({
		type: 'POST',
		url: '/v6/login',
		data: $(this).serialize(),
		success: function(data) {
			if(data.code == 200) {
				$.cookie('userInfo', JSON.stringify(data.result), { path: '/' });
					location.href = '/';
				}
		},
        error: function() {
				alert(arguments[2]);
			}
	});

        return false;

    });
	
	// 页面所有代码执行完毕，进度条结束
	nprogress.done();
});
