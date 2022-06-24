// 세로 메뉴
$(".nav > ul > li").hover(function(){
    $(this).find(".subMenu").stop().slideDown();
}, function(){
    $(this).find(".subMenu").stop().slideUp();
});

// 이미지 슬라이드 (페이드)
$(".slideList").children("div:gt(0)").hide();

var currentIndex = 0;

setInterval(function(){
    var next = (currentIndex + 1) % 3

    $(".slideList").find("div").eq(currentIndex).fadeOut();
    $(".slideList").find("div").eq(next).fadeIn();

    currentIndex = next;
},3000);

// 탭메뉴
var tabMenu = $(".tab");

tabMenu.find("ul > li > ul").hide();
tabMenu.find("ul > li.active > ul").show();

function tabList(e){
    e.preventDefault();
    var target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
};

tabMenu.find("ul > li > a").click(tabList).focus(tabList);