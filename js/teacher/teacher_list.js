define(['aside', 'header', 'loading', 'nprogress', 'jquery', 'template'], function(undefined, undefined, undefined, nprogress, $, template) {
    //请求教师列表
	(function(){
        $.get('/v6/teacher', function(data) {
			if(data.code === 200) {
                var result=template('template-teacher', data);
				$('#table-teacher-list').append(result);
			}

            // nprogress.done();
		});
    })();

    nprogress.done();
});
