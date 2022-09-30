
function blog_chief_large(title,summary)
{
    let str = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12" > <a href="blogs/'
        +title
        +'/main.html"><img class="dash" src="blogs/'
        +title
        +'/images/cover.jpg" class="img-responsive" alt="No image"></a>'
        +'<div style="margin-top:6px;margin-bottom:10px;font-size:14px;">'+summary+'</div></div>';
    document.write(str);
}
