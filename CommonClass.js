//方法封装
function requestMethod(par1,par2,par3,callback){
    //第一步创建请求对象xhr
    var xhr = new XMLHttpRequest();
//第二步：建立与服务端的连接（get/post）
    xhr.open(par1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2);
//设置头信息，让数据已表单的形式传递给服务器
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
//第三步：发送异步请求
    xhr.send(par3); //因为异步请求子线程和主线程都会进行，而我们希望主线程等子线程执行完再执行，所以用回调函数解决
//第四步 接收服务端返回的数据
    xhr.onreadystatechange = function (){
        if(xhr.readyState ==4 && xhr.status==200){   //readyState==4 代表ajax数据请求已经完成 status==200 表示数据成功返回
            //responseText中包含了服务器返回的数据
            var res =JSON.parse(xhr.responseText);
            var str =res.data;
            callback(str);
        }
    }
}
