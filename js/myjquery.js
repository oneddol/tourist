(function($){
    function openNav(){
        $("#header").toggleClass("on")
        if($("#header").hasClass("on")){
            $(".nav").css({
                display:"block"
            }).animate({
                right:"0px"
            }, 500)
        } else {
            $(".nav").animate({
                right:"-320px"
            }, 500, function(){  //call-back함수; 해당 애니메이션 종료 후 실행 될 함수를 입력할 때 시간, 함수 순으로 적어줌
                $(this).css({
                    display:"none"
                })
            })
        }
        $(".outlayer").toggleClass("on")
        
    }
    $(".open_gnb").on("click", openNav)
    $(".outlayer").on("click", openNav)

    function init(){
        var winWidth = $(window).innerWidth()
        if (winWidth > 800 && !($("html").hasClass("pc"))){
            $("#header").removeClass("on")
            $(".outlayer").removeClass("on")
            $(".nav").css({
                display:"block",
                right:"0px"
            })
            $("html").addClass("pc").removeClass("mobile")
        } else if (windWidth < 800 && !($("html").hasClass("mobile"))) {
            $("#header").removeClass("on")
            $(".nav").css({
                display:"none",
                right:"-320px"
            })
            $("html").addClass("mobile").removeClass("pc")
        }
    }
    init()
    $(window).resize(function(){
        init()
    })

// 메인슬라이드 jQuery : 슬라이더 연결
    $(".slide_inner").slick({
        autoplay:true, //자동재생여부
        dots:true, //슬라이드 인덱스 표기
        autoplaySpeed:3000, //슬라이드 당 표시 시간
        speed:600, //슬라이드 교체에 걸리는 시간, 기본값600(생략가능)
        slidesToShow:1,  //한 화면에 보여지는 슬라이드 장 수, 기본값(생략가능)
        slidesToScroll:1, //한번에 넘어가는 슬라이드의 장 수, 기본값(생략가능)
        pauseOnHover:false,  //슬라이드에 마우스 호버 시 정지여부, 기본값true(생략가능)
        pauseOnDotsHover:false, //슬라이드 인덱스에 호버 시 정지여부, 기본값true(생략가능)
        pauseOnFocus:false, //개체 선택 시 슬라이드 정지 여부
        cssEase:"linear", //가속도함수(생략가능)
        draggable:true, //마우스 드래그로 슬라이드 이동 가능 여부, 기본값true(생략가능)
        fade:false, //슬라이드 전환 방식, true=좌>우, false=fadein/out 기본값false(생략가능)
        arrows:true, //좌우 화살표 사용 여부, 기본값일 시 prev, next 버튼으로 표기, 기본값(생략가능)
        prevArrow:'<button class="prev_arrow marrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button class="next_arrow marrow"><i class="fas fa-chevron-right"></i></button>'
    })

    // $(".plpa").on("click", function(){
    //     if($(this).find("i").hasClass("fa-pause")){
    //         $(this).find("i").removeClass("fa-pause").addClass("fa-play")
    //         $(".slide_inner").slick("slickPause")
    //     } else {
    //         $(this).find("i").removeClass("fa-play").addClass("fa-pause")
    //         $(".slide_inner").slick("slickPlay")
    //     }
    // })

    $(".plpa").toggle(
        function(){
        $(this).find("i").removeClass("fa-pause").addClass("fa-play")
        $(".slide_inner").slick("slickPause")
        },
        function(){
            $(this).find("i").removeClass("fa-play").addClass("fa-pause")
            $(".slide_inner").slick("slickPlay")
        }
        )



})(jQuery)