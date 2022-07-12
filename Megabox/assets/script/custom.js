//배너 이미지 슬라이드
var swiper = new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});

//영화차트 이미지 슬라이드
var swiper = new Swiper('.swiper-container2',{
    slidesPerView: 4,
    spaceBetween: 24,
    mousewheel: {
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        600: {
            slidesPerView: 1.4,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});

//영화차트 탭 메뉴
var movBtn = $(".movie_title > ul > li");    
var movCont = $(".movie_chart > div");  

movCont.hide().eq(0).show();

movBtn.click(function(e){
    e.preventDefault();
    var target = $(this);         
    var index = target.index();  
    movBtn.removeClass("active");   
    target.addClass("active");    
    movCont.css("display","none");
    movCont.eq(index).css("display","block");
});

// 공지사항 탭 메뉴
var tabMenu = $(".notice");

// 컨텐츠 내용 숨김
tabMenu.find("ul > li > ul").hide();
tabMenu.find("li.active > ul").show();

function tabList(e){
    e.preventDefault();
    var target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
}

tabMenu.find("ul > li > a").click(tabList).focus(tabList);





// 트레일러
(function($){

    /* 트레일러 영상 플레이어를 활성화 */
    /* YouTube iframe API: https://developers.google.com/youtube/player_parameters */
    
    (function handleTrailer(){
        // 셀렉터 캐시
        var $selector = {
            body: $("body"),
            overlay: $("#blackout"),
            modal: $("#trailerModal"),
            showButton: $("#showTrailer"),
            hideButton: $("#hideTrailer"),
        };
        
        // 플레이어
        var player = {
            obj: null, // 플레이어 오브젝트
            query : {
                theme: "dark",
                color: "white",
                controls: 1, 
                autoplay: 1,
                enablejsapi: 1,
                modestbranding: 0, // YouTube 로고 감춤
                rel: 0,  // 관련 동영상 표시
                showinfo: 0, // 제목, 업로더 감춤
                iv_load_policy: 3 // 특수효과 감춤
            },
            visible: false
        };

        // 보이기, 숨기기 버튼 활성화
        $selector.showButton.on("click", showPlayer);
        $selector.hideButton.on("click", hidePlayer);

        // YouTube API를 이용해 iframe을 생성
        function setPlayer(id) {
            player.obj = new YT.Player("trailer",{
                width: 480,
                height: 282,
                videoId: id,    
                playerVars: player.query
            });

            // 처음 플레이어 크기 설정
            resizePlayer();

            // 리사이즈나 화면 회전시 플레이어 크기 다시 설정
            $(window).on("resize orientationchange", function() {
                resizePlayer();
            });
        }

        // 화면 크기에 비례해 iframe의 크기 조절
        function resizePlayer(){
            var viewport = {}, frame = {}, modal = {};

            viewport.width = $(window).width();
            viewport.height = $(window).height();

            frame.width = viewport.width;
            frame.height = frame.width / 1.6; // 16 : 10

            modal.top = ((viewport.height - frame.height) / 2) + "px";
            modal.left = "0px";

            $selector.modal.css(modal);

            player.obj.setSize(frame.width, frame.height);
        }

        // iframe 보이기
        function showPlayer() {
            // 처음 클릭시 iframe을 생성 
            if(!player.obj){
                setPlayer($selector.showButton.data("youtube"));
            }

            $selector.body.addClass("modal_on");
            $selector.overlay.show();
            player.visible = true;
        }

        // iframe 감추기
        function hidePlayer(){
            player.obj.stopVideo();
            $selector.overlay.hide();
            $selector.body.removeClass("modal_on");
            player.visible = false;
        }

    })();

})(jQuery); 