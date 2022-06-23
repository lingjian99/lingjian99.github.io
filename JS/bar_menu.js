function barMenu(){
    document.write(
        '<div class="navbar fixed-top navbar-expand-lg navbar-light" style="background-color: #eea000;">\
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

function comingSoon(){
    alert('Coming soon...');
}
