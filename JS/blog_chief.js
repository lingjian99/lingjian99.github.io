var myIndex = 0;

function blog_chief_large(title,summary)
{
    let str = '<div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" > <a href="blogs/'
        +title
        +'/main.html"><img src="blogs/'
        +title
        +'/images/cover.jpg" class="img-responsive" alt="No image"></a>'
        +'<div style="margin-top:6px;margin-bottom:10px;font-size:14px;">'+summary+'</div></div>';
    document.write(str);
}

function blog_photograph(title, summary)
{
    let str = '<div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12"><div style="position:relative;"> <img src="blogs/'
        +title+'/images/cover.jpg" alt="No image">'
        +'<a class="alink" href="blogs/'+title+'/main.html">'+summary+'</a></div></div>';
    document.write(str);  
}

function blog_chief_large1(name, title,summary)
{
    let str = '<div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" ><div style=""> <a href="blogs/'
        +name
        +'/main.html"><img class="dash" src="blogs/'
        +name
        +'/images/cover.jpg" class="img-responsive" alt="No image"></a>'
        +'<div style="margin-top:6px;margin-bottom:10px;font-size:14px;">'+summary+'</div></div><div style="z-index:100;"><a href="blogs/'+name+'/main.html">'+title+'</a></div></div>';
    document.write(str);
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}