function barMenu(){
    document.write(
        '<div class="navbar fixed-top navbar-expand-lg navbar-light" style="background-color: var(--main-color);">\
        <a><i class="fa-solid fa-burger" style="font-size: 24px; color: rgb(200, 100, 20); text-align: left;"></i> &nbsp;<i class="fa-solid fa-mug-hot" style="font-size: 20px; color: rgb(34, 104, 110); align-self: left;"></i></a>\
            <a class="navbar-brand" href="#">&nbsp &nbsp无处安放的猪</a>\
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="navbar-toggler-icon"></span>\
            </button>\
            <div class="collapse navbar-collapse" id="navbarSupportedContent">\
                <ul class="navbar-nav ml-auto topnav">\
                    <li class="nav-item active">\
                        <a class="nav-link" href="index.html"><i class="fa-solid fa-house-chimney-window"></i> Home </a>\
                    </li>\
                    <li class="nav-item">\
                        <a class="nav-link" href="aboutme.html"><i class="fa-regular fa-envelope"></i> Contact</a>\
                    </li>\
                </ul>\
            </div>\
        </div>'
    )
}
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
