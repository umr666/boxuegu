define([],function(){
    var cookieArr = document.cookie.split('; ');
    var isLogin=false;

    for(var i=0;i<cookieArr.length;i++){
        if(cookieArr[i].indexOf('PHPSESSID=') === 0){
            isLogin=true;
            break;
        }

    }

    !isLogin && (location.href='/html/home/login.html');

})