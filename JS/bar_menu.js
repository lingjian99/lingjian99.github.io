function barMenu(){
    document.write(
    '<nav class="navbar navbar-expand-sm navbar-dark fixed-top" style="background-color: var(--main-color);">\
        <a class="navbar-brand" style="font-size:20px; line-height:24px; text-indent:20px;" href="javascript:void(0)"><i class="bi bi-camera-fill" style="color:white;font-size: 22px;"></i>&nbsp无处安放的猪</a>\
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="mynavbar">\
        <ul class="navbar-nav me-auto"></ul>\
            <a href="index.html" class="bar_btn" style="align:right"><i class="bi bi-house" style="color:white;"></i>&nbspHome</a>\
            <a href="About Me" class="bar_btn"><i class="bi bi-file-person" style="color:white;"></i>&nbspAbout Me</a>\
        </div>\
    </nav>')
}

/*
            /*<a href="http://34.94.134.31:8080/dosaic" class="bar_btn"><i class="bi bi-file-person" style="color:white;"></i>&nbspAbout</a>\
*/
function footMenu(){
    document.write(
        '<br>    <br>    <br>    <br>    <br>\
        <div class="navbar bg-dark fixed-bottom">\
          <div style="width: 100%; margin:auto; word-wrap: break-word; max-width: 720px;">\
            <p class="blogNormal" style="text-indent:0px;">这是一个老程序员的心血来潮，也算是一个编程练习, 代码均在github上面。版权莫有，盗版不究！NonCopyRight© 2020.9\
            <span><a href="https://www.facebook.com/profile.php?id=100073787142000" class="fa-brands fa-facebook"></a>\
            <a href="#" class="fa-brands fa-twitter"></a>\
            <a href="#" class="fa-brands fa-linkedin"></a>\
            <a href="#" class="fa-brands fa-instagram"></a></span>\
          </div>\
      </div>'
    )
}
function comingSoon(){
    alert('Coming soon...');
}
