define(['jquery'], function($) {

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
					location.href = '/';
				}
		},
        error: function() {
				alert(arguments[2]);
			}
	});

        return false;

    });
	
});
