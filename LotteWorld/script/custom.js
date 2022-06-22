// banner
$(".nav > ul > li").mouseover(function(){
    $(this).find(".subMenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".subMenu").stop().slideUp(200);
});

// img slide
var currentIndex = 0;
setInterval(function(){
    if(currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-378)+"px"

    $(".slideList").animate({top:slidePosition},400);
},3000);

// tabMenu
var tabMenu = $(".notice");

tabMenu.find("ul > li > ul").hide();
tabMenu.find("ul > li.active > ul").show();

function tabList(e){
    e.preventDefault();
    var target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
};

tabMenu.find("ul > li > a").click(tabList).focus(tabList);

// popup
$(".ad").click(function(){
    $(".layerbg").css("display","block");
});
$(".layer .close").click(function(){
    $(".layerbg").css("display","none");
});