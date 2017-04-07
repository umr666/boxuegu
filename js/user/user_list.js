define(['aside', 'header', 'loading', 'nprogress', 'jquery', 'template'], function(undefined, undefined, undefined, nprogress, $, template) {
	
    (function(){
        $.get('/v6/course', function(data) {
			if(data.code === 200) {
                console.log(data);
                // var result=template('template-teacher', data);
				// $('#table-teacher-list').append(result);
			}

            // nprogress.done();
		});
    })();

    nprogress.done();
});
