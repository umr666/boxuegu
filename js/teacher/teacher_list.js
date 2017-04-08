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

    (function(){
        $(document).on('click','.teacher-view',function(){
            $.get('/v6/teacher/view',{
                tc_id: $(this).data('teacher-id')
            },function(data){
                if(data.code==200){
                    $('#teacher-modal').html(template('teacher-view-tpl',data.result));
                }
                
            })
        })
    })()

    nprogress.done();
});
